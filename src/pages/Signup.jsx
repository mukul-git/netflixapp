import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from "../utils/firebase-config";
import BackgroundImage from "../components/BackgroundImage";
import Header from "../components/Header";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [formValues, setFormValues] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const handleSignup = async () => {
    try {
      const { email, password } = formValues;
      await createUserWithEmailAndPassword(firebaseAuth, email, password);
      navigate("/netflix");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Container>
      <BackgroundImage />
      <div className="content">
        <Header login />
        <div className="flex coloumn a-center j-center body">
          <div className="text flex coloumn">
            <h1>Watch unlimited Movies and TV shows</h1>
            <h4>Watch anywhere, Cancel anytime</h4>
            <h6>
              Ready to watch, Enter your Email to create or start membership
            </h6>
          </div>
          <form className="form">
            <input
              type="email"
              placeholder="Enter your Email"
              name="email"
              value={formValues.email}
              onChange={(e) =>
                setFormValues({ ...formValues, email: e.target.value })
              }
            />

            {!showPassword ? (
              <button
                onClick={() => setShowPassword(!showPassword)}
                type="submit"
              >
                Get Started
              </button>
            ) : (
              <input
                type="password"
                placeholder="Enter your password"
                name="password"
                value={formValues.password}
                onChange={(e) =>
                  setFormValues({
                    ...formValues,
                    password: e.target.value,
                  })
                }
              />
            )}
          </form>
          <button onClick={handleSignup}>Sign up</button>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  .content {
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-rows: 15vh 85vh;
    .body {
      gap: 1rem;
      .text {
        gap: 1rem;
        text-align: center;
        font-size: 2rem;
        h1 {
          padding: 0 25rem;
        }
      }
      .form {
        display: grid;
        grid-template-columns: ${({ showPassword }) =>
          showPassword ? "1fr 1fr" : "2fr 1fr"};
        width: 60%;
        input {
          color: black;
          border: none;
          padding: 1.5rem;
          font-size: 1.2rem;
          border: 1px solid black;
          &:focus {
            outline: none;
          }
        }
        button {
          padding: 0.5rem 1rem;
          background-color: #e50914;
          border: none;
          cursor: pointer;
          color: white;
          font-weight: bolder;
          font-size: 1.05rem;
        }
      }
      button {
        padding: 0.5rem 1rem;
        background-color: #e50914;
        border: none;
        cursor: pointer;
        color: white;
        border-radius: 0.2rem;
        font-weight: bolder;
        font-size: 1.05rem;
      }
    }
  }
`;
