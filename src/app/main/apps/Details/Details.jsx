import { Typography } from "@material-ui/core";
import "./Details.css";

const Details = ({ title, moreDetails }) => {
  return (
    <>
      <Typography gutterBottom variant="h5" className="detail-title">
        {title}
      </Typography>
      <hr className="line" />
      <Typography gutterBottom variant="body1">
        {moreDetails}
      </Typography>
    </>
  );
};

export default Details;
