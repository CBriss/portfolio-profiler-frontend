import BasicTextField from "../lib/basic_text_field";

const NewCompanyFields = ({ company, dispatch }) => {
  const handleChange = (e) => {
    dispatch({ type: e.target.name, payload: e.target.value });
  };

  return (
    <>
      <img width="100px" height="100px" src={company.logo} alt="" />
      <BasicTextField
        id="name"
        label="Name"
        value={company.name}
        onChangeCallback={handleChange}
      />
      <BasicTextField
        id="website"
        label="Website"
        value={company.website}
        onChangeCallback={handleChange}
      />
      <BasicTextField
        id="ticker"
        label="Ticker Symbol"
        value={company.ticker}
        onChangeCallback={handleChange}
      />
      <BasicTextField
        id="sector"
        label="Company Sector/Industry"
        value={company.sector}
        onChangeCallback={handleChange}
      />
    </>
  );
};

export default NewCompanyFields;
