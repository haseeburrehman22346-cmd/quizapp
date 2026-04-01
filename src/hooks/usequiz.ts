"use client";
import axios from "axios";
import { useEffect } from "react";
import useDataSet from "@/reducer/quizReducer";
const useQuiz = () => {
  const [state, dispatch] = useDataSet();
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("/api/question");
      dispatch({ type: "SET_DATA", payload: res.data });
    };
    fetchData();
  }, []);
  return { ...state, dispatch };
};
export default useQuiz;