import { PATIENT_CATEGORIES } from "../../Common/constants";
import { PatientCategory } from "../Facility/models";

const PatientCategoryBadge = (props: { category?: PatientCategory }) => {
  const categoryClass = props.category
    ? PATIENT_CATEGORIES.find((c) => c.text === props.category)?.twClass
    : "patient-unknown";
  return (
    <span
      className={`px-2 py-0.5 text-sm rounded-full ${categoryClass} font-medium`}
    >
      {props.category}
    </span>
  );
};

export default PatientCategoryBadge;
