import React, { useEffect, useState } from "react";
import { useUpdateEffect } from "../../hooks";
import PageLayout from "../../components/PageLayout";
import Heading from "../../components/Heading";
import TextInput from "../../components/TextInput";
import Checkbox from "../../components/Checkbox";
import Dropdown from "../../components/Dropdown";
import constants from "./constants";
import Button from "../../components/Button";
import styles from "./index.module.css";

const isEmailNotValid = (email: string, isAnonymous: boolean) =>
  !isAnonymous &&
  (email.trim() === "" ||
    !email.trim().toLowerCase().match(constants.EMAIL_REGEX));

const isAmountNotValid = (
  amount: { name: string; value: string } | undefined
) => !amount;

const DonateBox: React.FC = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [amountError, setAmountError] = useState(false);
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [isTermsAgreed, setTerms] = useState(false);
  const [selectedAmount, setSelectedAmount] =
    useState<{ name: string; value: string }>();

  useEffect(() => {
    if (isAnonymous) {
      setEmail("");
    }
  }, [isAnonymous]);

  useUpdateEffect(() => {
    if (isEmailNotValid(email, isAnonymous)) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
  }, [email, isAnonymous]);

  useUpdateEffect(() => {
    if (isAmountNotValid(selectedAmount)) setAmountError(true);
    else setAmountError(false);
  });

  const getEmailErrorMessage = () => {
    if (!isAnonymous && email.trim() === "") return "email cannot be empty";
    if (
      !isAnonymous &&
      !email.trim().toLowerCase().match(constants.EMAIL_REGEX)
    )
      return "not a valid email";
  };

  const getAmountErrorMessage = () => {
    if (!selectedAmount) return "please select amount";
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const emailNotValid = isEmailNotValid(email, isAnonymous);
    const amountNotValid = isAmountNotValid(selectedAmount);
    if (emailNotValid || amountNotValid) {
      if (emailNotValid) setEmailError(true);
      if (amountNotValid) setAmountError(true);
      return;
    }
    console.log({
      email,
      isAnonymous,
      selectedAmount,
    });
  };

  return (
    <PageLayout>
      <Heading textAlign="center">Donate Box</Heading>
      <main className={styles.donatebox}>
        <form onSubmit={handleSubmit} noValidate>
          <TextInput
            id="email"
            type="email"
            label="Please enter email id"
            name="Email"
            value={email}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setEmail(event.target.value);
            }}
            disabled={isAnonymous}
            error={emailError}
            errorMessage={getEmailErrorMessage()}
          />
          <div className={styles.donatebox__anonymous}>
            <Checkbox
              label="Make the donation anonymous"
              checked={isAnonymous}
              onChange={() => {
                setIsAnonymous((prevState) => !prevState);
              }}
            />
          </div>
          <Dropdown
            label="Amount( INR )"
            options={constants.DONATE_AMOUNT_VALUES}
            value={selectedAmount}
            placeHolder="Select amount among"
            onChange={(optionName, optionValue) => {
              setSelectedAmount({ name: optionName, value: optionValue });
            }}
            required
            error={amountError}
            errorMessage={getAmountErrorMessage()}
          />
          <div className={styles.donatebox__terms}>
            <Checkbox
              label="I agree to"
              checked={isTermsAgreed}
              onChange={() => {
                setTerms((prevState) => !prevState);
              }}
            />
            <a href="//www.google.com" target="_blank" rel="noreferrer">
              terms and conditions
            </a>
          </div>
          <div className={styles.donatebox__submit}>
            <Button type="submit" disabled={!isTermsAgreed}>
              Submit
            </Button>
          </div>
        </form>
      </main>
    </PageLayout>
  );
};

export default DonateBox;
