import { StyledContainer, Text } from "@nextui-org/react";
import styles from "./FeedbackForm.module.css";
import { useState, useEffect } from "react";
import spamApi from "services/spam.api";

export default function FeedbackForm() {
  const [res, setRes] = useState({ label: "", spam_probability: 0 });
  const [query, setQuery] = useState("");
  const [show, setShow] = useState(false);

  const checkSpam = (query) => {
    spamApi
      .checkIfSpamOrHam(query)
      .then((res) => {
        setRes(res.data);
        setShow(true);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  function onSubmitForm(event) {
    event.preventDefault();
    checkSpam(query);
    console.log(query);
  }

  return (
    <>
    <h2>Spam Detector</h2>
      <form
        className={styles.form}
        name="feedback"
        method="POST"
        onSubmit={onSubmitForm}
      >
        <input type="hidden" name="form-name" value="Spam Text" />

        <label htmlFor="feedback">Enter your spam text</label>
        <textarea
          id="feedback"
          className={styles["form-field"]}
          wrap="soft"
          name="spam"
          required
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        ></textarea>
        <button className={styles.button} type="submit">
          Check
        </button>
      </form>
      {show && (
        <StyledContainer>
          <Text>Spam Text: {query}</Text>
          <Text>Catagory : {res.label}</Text>
          <Text>Spam Probability: {res.spam_probability}</Text>
        </StyledContainer>
      )}
    </>
  );
}
