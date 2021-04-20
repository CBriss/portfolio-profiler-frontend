import React, { useEffect } from "react";
import CompanyCard from "./company_card";
import NewCompany from "./new_company";

import { getCompanies, deleteCompany } from "../../actions/companies.js";

const CompanyList = () => {
  let [companies, setCompanies] = React.useState([]);

  useEffect(() => {
    getCompanies().then((companies) => {
      setCompanies(companies);
    });
  }, []);

  const removeCompany = (company_id) => {
    deleteCompany(company_id)
      .then(() => {
        setCompanies(
          companies.filter((company) => {
            return company._id !== company_id;
          })
        );
      })
      .catch((error) => console.log(error));
  };

  const addToList = (newCompany) => {
    setCompanies([...companies, newCompany]);
  };

  return (
    <>
      <NewCompany updateListCallback={addToList} />
      <section className="company-list">
        {companies.map((company) => {
          return (
            <CompanyCard
              key={company._id}
              {...company}
              onRemove={removeCompany}
            />
          );
        })}
      </section>
      <a href="https://clearbit.com">Logos provided by Clearbit</a>
    </>
  );
};

export default CompanyList;
