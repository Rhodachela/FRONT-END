// src/api/tasks.js
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
  query,
  orderBy
} from "firebase/firestore";
import { db } from "../firebase/config";

const tasksCollection = collection(db, "tasks");

// Fetch all tasks, ordered by creation date
export async function getTasks() {
  const q = query(tasksCollection, orderBy("createdAt", "desc"));
  const snapshot = await getDocs(q);
  return snapshot.docs.map(d => ({ id: d.id, ...d.data() }));
}

// Add a new task
export async function addTaskFirebase(task) {
  const docRef = await addDoc(tasksCollection, {
    ...task,
    createdAt: Date.now()
  });
  return { id: docRef.id, ...task };
}

// Update a task
export async function updateTaskFirebase({ id, updatedTask }) {
  const taskDoc = doc(db, "tasks", id);
  await updateDoc(taskDoc, updatedTask);
  return { id, ...updatedTask };
}

// Delete a task
export async function deleteTaskFirebase(id) {
  const taskDoc = doc(db, "tasks", id);
  await deleteDoc(taskDoc);
  return id;
}
