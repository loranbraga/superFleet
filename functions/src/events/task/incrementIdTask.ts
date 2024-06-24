/* eslint-disable @typescript-eslint/no-explicit-any */
import {getFirestore} from "firebase-admin/firestore";


export const incrementIdTaskFunction = async (event: any) => {
  const query = await getFirestore()
    .collection("tasks").count().get();

  const {count} = query.data();

  return event?.data?.ref.set({incrementId: count}, {merge: true});
};
