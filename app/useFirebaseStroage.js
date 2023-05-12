import { useEffect, useState } from "react";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { initializeApp } from "firebase/app";

function useFirebaseStorage() {
  const firebaseConfig = {
    apiKey: "AIzaSyCnZ96NHfg_Z3fBkbFFV6LHH95LelxFH9A",
    authDomain: "inyyseoul-274b9.firebaseapp.com",
    projectId: "inyyseoul-274b9",
    storageBucket: "inyyseoul-274b9.appspot.com",
    messagingSenderId: "289757472615",
    appId: "1:289757472615:web:0eb9a52aa8098869ebb1c2",
    measurementId: "G-57XR5H2MRN"
  };

  useEffect(() => {
    const app = initializeApp(firebaseConfig);  // firebase 시작 (초기화)
    const storage = getStorage(app);  // ex) a = 13; (storage 변수 사용)

    setStorage(storage);
  }, []);

  const uploadFile = async (file) => {
    if (!storage) return;  // Singleton pattern 

    const storageRef = ref(storage, "images/" + file.name);
    const uploadTask = uploadBytesResumable(storageRef, file);

    return new Promise((resolve, reject) => {  // 하나의 비동기 (비동기의 흐름)
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // 업로드 중일 때의 상태 변화 처리
        },
        (error) => {
          console.error(error);
          reject(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            console.log("File available at", url);
            resolve(url);
          });
        }
      );
    });
  };

  return {
    uploadFile,
  };
}

export default useFirebaseStorage;