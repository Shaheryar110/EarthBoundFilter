import {firebase} from '@react-native-firebase/firestore'; // Assuming you're using react-native-firebase Firestore

interface ScheduleData {
  fullName: string;
  email: string;
  phone: string;
  message: string;
  selectedDay: string; // Expected format: 'yy-mm-dd'
  selectedTimeSlot: string;
}

export const SubmitSchedule = async (data: ScheduleData) => {
  try {
    const {selectedDay, selectedTimeSlot} = data;

    // Reference to the scheduleTimes collection
    const scheduleTimesRef = firebase
      .firestore()
      .collection('scheduleTimes')
      .doc(selectedDay);

    // Fetch the scheduleTimes document
    const scheduleTimesDoc = await scheduleTimesRef.get();

    let isNewTimeSlot = false;

    if (scheduleTimesDoc.exists) {
      const scheduleTimesData = scheduleTimesDoc.data();
      const existingTimeSlots = scheduleTimesData?.timeSlots || [];

      // Check if the timeSlot already exists in the array
      if (!existingTimeSlots.includes(selectedTimeSlot)) {
        // Add the timeSlot to the array
        await scheduleTimesRef.update({
          timeSlots: firebase.firestore.FieldValue.arrayUnion(selectedTimeSlot),
        });
        console.log('Time slot added to scheduleTimes:', selectedTimeSlot);
        isNewTimeSlot = true;
      } else {
        console.log(
          'Time slot already exists in scheduleTimes:',
          selectedTimeSlot,
        );
      }
    } else {
      // Create a new document with the selected timeSlot
      await scheduleTimesRef.set({
        timeSlots: [selectedTimeSlot],
      });
      console.log(
        'New document created in scheduleTimes with time slot:',
        selectedTimeSlot,
      );
      isNewTimeSlot = true;
    }

    // Proceed to create a document in scheduleDetails only if the timeSlot was new
    if (isNewTimeSlot) {
      const scheduleDetailsRef = firebase
        .firestore()
        .collection('scheduleDetails')
        .doc(`${selectedDay}-${selectedTimeSlot}`);

      // Check if the scheduleDetails document exists for the selected timeSlot
      const scheduleDetailsDoc = await scheduleDetailsRef.get();

      if (!scheduleDetailsDoc.exists) {
        // Create a new document with the schedule details
        await scheduleDetailsRef.set(data);
        console.log(
          'New scheduleDetails document created for:',
          `${selectedDay} - ${selectedTimeSlot}`,
        );
      } else {
        console.log('Schedule details already exist for this time slot.');
      }
    }
  } catch (error) {
    console.error('Error submitting schedule:', error);
  }
};
export const checkScheduleByDate = async (date: string) => {
  // Format the date to only include YYYY-MM-DD (ignore time part)

  try {
    // Query Firestore to find documents where scheduleTime (as a string) matches the formatted date
    const querySnapshot = await firebase
      .firestore()
      .collection('scheduleTimes') // Replace with your collection name
      .doc(date) // Assuming scheduleTime is stored in YYYY-MM-DD format
      .get();
    console.log(querySnapshot, date);

    if (querySnapshot.exists) {
      return querySnapshot.data(); // Return document data
    } else {
      console.log('No document found for this docId.');
      return null;
    }

    //     if (!querySnapshot?.empty) {
    //       // If documents found, return the first one (or process accordingly)
    //       const doc = querySnapshot?.docs[0];
    //       return doc.data(); // Return document data
    //     } else {
    //       console.log('No document found for this date.');
    //       return null;
    //     }
  } catch (error) {
    console.error('Error fetching document:', error);
    return null;
  }
};
