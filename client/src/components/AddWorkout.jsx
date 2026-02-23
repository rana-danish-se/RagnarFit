import React from "react";
import styled from "styled-components";
import Button from "./Button";

const Card = styled.div`
  flex: 1;
  min-width: 280px;
  padding: 24px;
  border: 1px solid ${({ theme }) => theme.text_primary + 20};
  border-radius: 14px;
  box-shadow: 1px 6px 20px 0px ${({ theme }) => theme.primary + 15};
  display: flex;
  flex-direction: column;
  gap: 12px;
  @media (max-width: 600px) {
    padding: 16px;
  }
`;

const Title = styled.div`
  font-weight: 600;
  font-size: 16px;
  color: ${({ theme }) => theme.primary};
  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

const Label = styled.label`
  font-size: 12px;
  color: ${({ theme }) => theme.text_primary};
  padding: 0px 4px;
`;

const Input = styled.input`
  width: 100%;
  font-size: 14px;
  outline: none;
  border: none;
  border-radius: 8px;
  border: 0.5px solid ${({ theme }) => theme.text_secondary};
  background-color: transparent;
  color: ${({ theme }) => theme.text_primary};
  padding: 12px 14px;
  &:focus {
    border-color: ${({ theme }) => theme.primary};
  }
`;

const Select = styled.select`
  width: 100%;
  font-size: 14px;
  outline: none;
  border-radius: 8px;
  border: 0.5px solid ${({ theme }) => theme.text_secondary};
  background-color: transparent;
  color: ${({ theme }) => theme.text_primary};
  padding: 12px 14px;
  cursor: pointer;
  &:focus {
    border-color: ${({ theme }) => theme.primary};
  }
  option {
    background: ${({ theme }) => theme.bg};
    color: ${({ theme }) => theme.text_primary};
  }
`;

const Row = styled.div`
  display: flex;
  gap: 12px;
  @media (max-width: 600px) {
    gap: 8px;
  }
`;

const Field = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const categories = [
  "Legs",
  "Chest",
  "Back",
  "Arms",
  "Shoulders",
  "Cardio",
  "Core",
  "Full Body",
];

const AddWorkout = ({ workout, setWorkout, addNewWorkout, buttonLoading }) => {
  const handleChange = (field, value) => {
    setWorkout((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <Card>
      <Title>Add New Workout</Title>

      <Field>
        <Label>Category</Label>
        <Select
          value={workout.category || ""}
          onChange={(e) => handleChange("category", e.target.value)}
        >
          <option value="" disabled>
            Select category
          </option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </Select>
      </Field>

      <Field>
        <Label>Workout Name</Label>
        <Input
          placeholder="e.g. Back Squat"
          value={workout.workoutName || ""}
          onChange={(e) => handleChange("workoutName", e.target.value)}
        />
      </Field>

      <Row>
        <Field>
          <Label>Sets</Label>
          <Input
            type="number"
            placeholder="5"
            min="1"
            value={workout.sets || ""}
            onChange={(e) => handleChange("sets", e.target.value)}
          />
        </Field>
        <Field>
          <Label>Reps</Label>
          <Input
            type="number"
            placeholder="15"
            min="1"
            value={workout.reps || ""}
            onChange={(e) => handleChange("reps", e.target.value)}
          />
        </Field>
      </Row>

      <Row>
        <Field>
          <Label>Weight (kg)</Label>
          <Input
            type="number"
            placeholder="30"
            min="0"
            step="0.5"
            value={workout.weight || ""}
            onChange={(e) => handleChange("weight", e.target.value)}
          />
        </Field>
        <Field>
          <Label>Duration (min)</Label>
          <Input
            type="number"
            placeholder="10"
            min="1"
            value={workout.duration || ""}
            onChange={(e) => handleChange("duration", e.target.value)}
          />
        </Field>
      </Row>

      <Button
        text="Add Workout"
        small
        onClick={() => addNewWorkout()}
        isLoading={buttonLoading}
        isDisabled={buttonLoading}
      />
    </Card>
  );
};

export default AddWorkout;
