import React from "react";
import { Link } from "react-router-dom";
import linkIcon from "../../assets/icons/external-link-icon.png";
import "./OrganizationsCard.scss";

const OrganizationsCard = (props) => {
  if (!props.allOrganizations) {
    return null;
  }
  return (
    <>
      <div className="OrganizationsCard">
        <div className="OrganizationsCard__img-container">
          <img
            className="OrganizationsCard__img-container--img"
            src={props.allOrganizations.image}
            alt={props.allOrganizations.program_name}
          />
        </div>
        <div className="OrganizationsCard__info">
          <h2 className="OrganizationsCard__info--title">
            {props.allOrganizations.program_name}
          </h2>
          <p>
            <b>Program type:</b> {props.allOrganizations.program_type}
          </p>
          <p>
            <b>Location:</b> {props.allOrganizations.location}
          </p>
          <p className="OrganizationsCard__info--details">
            {props.allOrganizations.description}
          </p>
          {/* <p className="">
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
          </p> */}
          <div className="OrganizationsCard__links">
            <Link
              className="OrganizationsCard__links--learn-more"
              to={{
                pathname: `organizations/${props.allOrganizations.accountId}`,
              }}
            >
              Learn More
            </Link>
            <a
              className="OrganizationsCard__links--website"
              target="_blank"
              href={props.allOrganizations.website}
            >
              Website
              <img className="OrganizationsCard__link-icon" src={linkIcon} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrganizationsCard;
