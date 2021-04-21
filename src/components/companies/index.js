import React, { useEffect } from "react";
import CompanyCard from "./company_card";
import NewCompany from "./new_company";

import { getCompanies, deleteCompany } from "../../actions/companies.js";
import { Typography } from "@material-ui/core";

const CompanyList = () => {
  const [companies, setCompanies] = React.useState([]);
  const [error, setError] = React.useState(false);

  useEffect(() => {
    getCompanies()
      .then((companies) => {
        setCompanies(companies);
      })
      .catch((err) => {
        setError(true);
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
    setCompanies(
      [...companies, newCompany].sort((a, b) => a.name.localeCompare(b.name))
    );
  };

  if (error) {
    return (
      <section className="error-section">
        <Typography variant="h4">shhh, the database is sleeping</Typography>
        <Typography variant="h4">
          That, or we're having trouble connecting, sorry!
        </Typography>
      </section>
    );
  } else {
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
  }
};

export default CompanyList;
