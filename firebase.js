// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getFirestore, collection, addDoc, 
    getDocs, onSnapshot, deleteDoc, 
    doc,getDoc,updateDoc } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAXmuuWgAjN_b8TLuVkx7e8Ci1MZIeRjt4",
    authDomain: "proyectofinal-50cde.firebaseapp.com",
    projectId: "proyectofinal-50cde",
    storageBucket: "proyectofinal-50cde.appspot.com",
    messagingSenderId: "540267300902",
    appId: "1:540267300902:web:0e8dcfe650bcdebec13ee7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

//Guardar datos
export const saveNeumatico = (id_neumatico,Tipo_neumatico, Gama_neumatico, Especificaciones, Precio, Cantidad_inventario) =>
    addDoc(collection(db,"neumaticos"),{ id_neumatico,Tipo_neumatico, Gama_neumatico, Especificaciones, Precio, Cantidad_inventario})

//Obtener datos
export const get_Neumatico = () => getDocs(collection(db,"neumaticos"))
export const on_get_Neumatico = (callback) => onSnapshot(collection(db,"neumaticos"),callback)

//Eliminar datos
export const deleteNeumatico = id => deleteDoc(doc(db,"neumaticos",id))

export const getNeumatico = id => getDoc(doc(db,"neumaticos",id))

//Actualizar datos
export const updateNeumatico = (id,newFields) => updateDoc(doc(db,"neumaticos",id),newFields)