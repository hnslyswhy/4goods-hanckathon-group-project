import React from "react";
import { Link } from "react-router-dom";
import linkIcon from "../../assets/icons/external-link-icon.png";

const OrganizationsCard = (props) => {
  if (!props.allOrganizations.donations) {
    return null;
  }
  return (
    <>
      <h1>hello</h1>
      <div className="">
        <div className="">
          <img
            className=""
            src={props.allOrganizations.image}
            alt={props.allOrganizations.program_name}
          />
        </div>
        <div className="">
          <h2>{props.allOrganizations.program_name}</h2>
          <p>
            <b>Program type:</b> {props.allOrganizations.program_type}
          </p>
          <p>
            <b>Location:</b> {props.allOrganizations.location}
          </p>
          <p>{props.allOrganizations.description}</p>
          <p className="">
            Donations in need:
            {props.allOrganizations.donations.map((donation) => {
              if (donation.status === "In Need") {
                return <span className="">{donation.itemName}</span>;
              }
            })}
          </p>
          <p className="">
            Surplus donations:
            {props.allOrganizations.donations.map((donation) => {
              if (donation.status === "Surplus") {
                return <span className="">{donation.itemName}</span>;
              }
            })}
          </p>
          <div className="">
            <Link
              className=""
              to={{
                pathname: `organization/${props.allOrganizations.id}`,
              }}
            >
              Learn More
            </Link>
            <a
              className=""
              target="_blank"
              href={props.allOrganizations.website}
            >
              Website
              <img className="" src={linkIcon} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrganizationsCard;
