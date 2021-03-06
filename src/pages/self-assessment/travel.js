import React from "react"
import QuestionTemplate from "../../templates/yes-no-question-template"
import { logic } from "../../shared"

const Travel = () => (
  <QuestionTemplate lang="en" yesLink={logic.q14.yes} noLink={logic.q14.no}>
    <h2>Have you travelled outside of Canada in the last 14 days?</h2>
  </QuestionTemplate>
)

export default Travel
