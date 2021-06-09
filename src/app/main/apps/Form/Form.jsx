import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@material-ui/core";
import "./Form.css";

const Form = ({ setChoice, setChoice1, setChoice2 }) => {
  return (
    <>
      {/* ----------------------------------RADIO BUTTONS GROUP 1------------------------------------- */}
      <Typography variant="body1" gutterBottom>
        Is your project a mobile application?
      </Typography>
      <FormControl component="fieldset">
        <RadioGroup
          row
          name="choice"
          onChange={(e) => setChoice(e.target.value)}
        >
          <FormControlLabel
            value="Yes"
            control={<Radio />}
            label="Yes"
            className="radio"
          />
          <FormControlLabel
            value=""
            control={<Radio />}
            label="No"
            className="radio"
          />
        </RadioGroup>
      </FormControl>

      {/* ----------------------------------RADIO BUTTONS GROUP 2------------------------------------------- */}

      <Typography variant="body1" gutterBottom>
        Is your project in the cloud?
      </Typography>
      <FormControl component="fieldset">
        <RadioGroup
          row
          name="choice1"
          onChange={(e) => setChoice1(e.target.value)}
        >
          <FormControlLabel
            value="Yes"
            control={<Radio />}
            label="Yes"
            className="radio"
          />
          <FormControlLabel
            value=""
            control={<Radio />}
            label="No"
            className="radio"
          />
        </RadioGroup>
      </FormControl>

      {/* ----------------------------------RADIO BUTTONS GROUP 3------------------------------------------- */}

      <Typography variant="body1" gutterBottom>
        Does your project contain personal data?
      </Typography>
      <FormControl component="fieldset">
        <RadioGroup
          row
          name="choice2"
          onChange={(e) => setChoice2(e.target.value)}
        >
          <FormControlLabel
            value="Yes"
            control={<Radio />}
            label="Yes"
            className="radio"
          />
          <FormControlLabel
            value=""
            control={<Radio />}
            label="No"
            className="radio"
          />
        </RadioGroup>
      </FormControl>
    </>
  );
};

export default Form;
