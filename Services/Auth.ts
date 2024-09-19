import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {
  ConfigureParams,
  GoogleSignin,
} from '@react-native-google-signin/google-signin';
import {Toast} from 'react-native-toast-notifications';

type ExtendedConfigureParams = ConfigureParams & {
  forceConsentPrompt?: boolean;
};

const config: ExtendedConfigureParams & ConfigureParams = {
  webClientId:
    '134292134717-0075g38ern985f82f7qdr61hmpv06hjf.apps.googleusercontent.com',
  offlineAccess: true,
  hostedDomain: '',
  forceConsentPrompt: true, // Custom property
};

export const createUser = async (
  email: string,
  passowrd: string,
  name: string,
) => {
  auth()
    .createUserWithEmailAndPassword(email, passowrd)
    .then(async data => {
      createUserInDatabase(data.user.uid, name, email);
      Toast.show('signed in!', {
        type: 'success',
        placement: 'bottom',
        duration: 4000,
        animationType: 'slide-in',
      });
      console.log(data.user.uid);
      await AsyncStorage.setItem('guideCompleted', 'true');
    })

    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        Toast.show('That email address is already in use', {
          type: 'error',
          placement: 'bottom',
          duration: 4000,
          animationType: 'slide-in',
        });
      }

      if (error.code === 'auth/invalid-email') {
        Toast.show('That email address is invalid!', {
          type: 'error',
          placement: 'bottom',
          duration: 4000,
          animationType: 'slide-in',
        });
      }

      console.error(error);
    });
};

export const getUserById = async (uid: string) => {
  return firestore()
    .collection('users')
    .doc(uid)
    .get()
    .then(user => user.data())
    .catch(err => console.log(err));
};

export const createUserInDatabase = (
  uid: string,
  fullName: string,
  email: string,
) => {
  return firestore().collection('users').doc(uid).set({
    uid,
    fullName,
    email,
    createdAt: firestore.FieldValue.serverTimestamp(),
  });
};

export const onGoogleButtonPress = async () => {
  GoogleSignin.configure(config);
  await GoogleSignin.hasPlayServices({
    showPlayServicesUpdateDialog: true,
  });
  try {
    const userInfo = await GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(
      userInfo?.idToken,
    );
    return auth()
      .signInWithCredential(googleCredential)
      .then(async data => {
        console.log(data.user.uid, 'data.user.uid');

        const user = await getUserById(data.user.uid);
        if (user?.uid) {
          console.log(user, 'user from google');

          Toast.show(
            `Welcome Back! Hi ${data.user.displayName} Welcome back to Living Will.`,
            {
              type: 'success',
              placement: 'bottom',
              duration: 4000,
              animationType: 'slide-in',
            },
          );
          return;
        } else {
          if (data?.user) {
            createUserInDatabase(
              data.user?.uid,
              data?.user?.displayName || '',
              data?.user?.email || '',
            )
              .then(data => console.log('user Created In Database', data))
              .catch(err => console.log(err));
          }
        }
      })
      .catch(e => console.log(e));
  } catch (error) {
    console.log(error);
  }
};
export const logOut = async () => {
  auth()
    .signOut()
    .then(() =>
      Toast.show('Sign out successfull', {
        type: 'success',
        placement: 'bottom',
        duration: 4000,
        animationType: 'slide-in',
      }),
    );
};
export const signIn = async (email: string, password: string) => {
  // Check if email or password is empty
  if (!email?.trim() || !password) {
    Toast.show('FiLL ALL FEILDS', {
      type: 'error',
      placement: 'bottom',
      duration: 4000,
      animationType: 'slide-in',
    });
    return;
  }

  try {
    // Attempt to sign in with email and password
    let data = await auth().signInWithEmailAndPassword(email.trim(), password);
    console.log(data, 'signin');
  } catch (error: any) {
    // Handle different authentication errors
    let errorMessage = 'An unknown error occurred. Please try again later.';

    switch (error.code) {
      case 'auth/user-not-found':
        errorMessage = 'No user found with this email address.';
        break;
      case 'auth/wrong-password':
        errorMessage = 'Incorrect password. Please try again.';
        break;
      case 'auth/invalid-email':
        errorMessage = 'Invalid email format. Please check and try again.';
        break;
      case 'auth/user-disabled':
        errorMessage =
          'This account has been disabled. Please contact support.';
        break;
      default:
        // Optional: Log error details for debugging
        console.error('Auth Error:', error);
        break;
    }

    // Display error message using Toast
    Toast.show(errorMessage, {
      type: 'error',
      placement: 'bottom',
      duration: 4000,
      animationType: 'slide-in',
    });
  }
};
export const updateUser = async (
  uid: string,
  obj: {
    fullName: string;
    email: string;
    // phone: string;
  },
) => {
  const {fullName, email} = obj;
  firestore()
    .collection('users')
    .doc(uid)
    .update({
      fullName: fullName,
      email: email,
      // phone: phone,
    })
    .then(() => {
      Toast.show('User Updated Successfully', {
        type: 'success',
        placement: 'bottom',
        duration: 4000,
        animationType: 'slide-in',
      });
    })
    .catch(err => {
      Toast.show('User Didnt Updated', {
        type: 'error',
        placement: 'bottom',
        duration: 4000,
        animationType: 'slide-in',
      });
    });
};
