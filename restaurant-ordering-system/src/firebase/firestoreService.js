// firestoreService.js
import { db } from "./firebaseConfig";

import {
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  getDocs,
} from "firebase/firestore";

export const addMenuItem = async (userId, item) => {
  try {
    const menuCollection = collection(db, "restaurants", userId, "menu");
    await addDoc(menuCollection, item);
  } catch (error) {
    console.error("Error adding document: ", error);
  }
};

export const editMenuItem = async (userId, id, updatedItem) => {
  try {
    const itemDoc = doc(db, "restaurants", userId, "menu", id);
    await updateDoc(itemDoc, updatedItem);
  } catch (error) {
    console.error("Error updating document: ", error);
  }
};

export const deleteMenuItem = async (userId, id) => {
  try {
    const itemDoc = doc(db, "restaurants", userId, "menu", id);
    await deleteDoc(itemDoc);
  } catch (error) {
    console.error("Error deleting document: ", error);
  }
};

export const getMenuItems = async (userId) => {
  try {
    console.log(userId);
    const menuCollection = collection(db, "restaurants", userId, "menu");
    const querySnapshot = await getDocs(menuCollection);
    return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Error getting documents: ", error);
  }
};

export const addOrder = async (userId, order) => {
  try {
    const ordersCollection = collection(db, "restaurants", userId, "orders");
    await addDoc(ordersCollection, order);
  } catch (error) {
    console.error("Error adding order: ", error);
  }
};

export const getOrders = async (userId) => {
  try {
    const ordersCollection = collection(db, "restaurants", userId, "orders");
    const querySnapshot = await getDocs(ordersCollection);
    return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Error getting orders: ", error);
  }
};

export const deleteOrder = async (userId, orderId) => {
  try {
    console.log("Deleting order...");
    const orderRef = doc(db, "restaurants", userId, "orders", orderId);
    await deleteDoc(orderRef);
    console.log(`Order ${orderId} deleted successfully.`);
  } catch (error) {
    console.error("Error deleting order: ", error);
  }
};
