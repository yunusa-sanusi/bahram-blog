import { useState, ChangeEvent } from 'react';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

import { storage } from '../../utils/firebase/firebase.config';

type InitialState = {
  image: File;
};

const ImageUpload = () => {
  const [image, setImage] = useState<File | null>(null);
  const [percent, setPercent] = useState(0);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const imageUrl = e.target.files ? e.target.files[0] : null;
    console.log(imageUrl);
    setImage(imageUrl);
  };

  const handleUpload = () => {
    if (!image) {
      alert('Please upload an image first!');
    }
    const storageRef = ref(storage, `/files/${image!.name}`); // progress can be paused and resumed. It also exposes progress updates. // Receives the storage reference and the file to upload.
    const uploadTask = uploadBytesResumable(storageRef, image!);
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const percent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100,
        ); // update progress
        setPercent(percent);
      },
      (err) => console.log(err),
      () => {
        // download url
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          console.log(url);
        });
      },
    );
  };

  return (
    <div>
      <form>
        <input type="file" accept="image/*" onChange={handleChange} />
        <button type="button" onClick={handleUpload}>
          Upload to firebase
        </button>
        <p>{percent} "% done"</p>
      </form>
    </div>
  );
};
export default ImageUpload;
