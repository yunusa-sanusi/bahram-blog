import { doc, collection, getDoc, getDocs, setDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { v4 } from 'uuid';

import { db, storage } from './firebase.config';

type PostDataType = {
  id: string;
  title: string;
  body: string;
  description: string;
  category: string;
  mainImage: File | null;
};

export const getAllCategories = async () => {
  const query = collection(db, 'categories');
  const categoriesSnapshot = await getDocs(query);

  return categoriesSnapshot.docs;
};

const uploadPostImage = (image: File) => {
  if (!image) return;

  const imageRef = ref(storage, `/images/posts/${image!.name + v4()}`);
  const uploadTask = uploadBytes(imageRef, image).then((snapshot) => {
    return getDownloadURL(snapshot.ref).then((url) => {
      return url;
    });
  });
  return uploadTask;
};

export const createPostDocument = async (postData: PostDataType) => {
  if (!postData) return;

  const postDocRef = doc(db, 'posts', postData.id);
  const postSnapshot = await getDoc(postDocRef);

  if (!postSnapshot.exists()) {
    const { id, title, body, description, category, mainImage } = postData;
    const createdAt = new Date();
    const mainImageUrl = await uploadPostImage(mainImage!);

    try {
      await setDoc(postDocRef, {
        id,
        title,
        body,
        description,
        mainImageUrl,
        category,
        createdAt,
      });
    } catch (error: any) {
      console.log('error creating the post', error.message);
    }
  }

  return postDocRef;
};
