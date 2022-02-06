import React, { Component } from "react";
//import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import linkIcon from "../../assets/icons/external-link-icon.png";
import "./OrganizationsCard.scss";

class OrganizationsCard extends Component {
  state = {
    donationList: [],
  };

  getDonationList = (id) => {
    axios
      .get(`http://localhost:8080/donation/account/${id}`)
      .then((res) => {
        this.setState({
          donationList: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  componentDidMount() {
    this.getDonationList(this.props.allOrganizations.accountId);
  }

  render() {
    if (!this.props.allOrganizations && this.state.donationList) {
      return null;
    }

    console.log(this.state.donationList);
    return (
      <div className="OrganizationsCard">
        <div className="OrganizationsCard__img-container">
          <img
            className="OrganizationsCard__img-container--img"
            src={this.props.allOrganizations.image}
            alt={this.props.allOrganizations.program_name}
          />
        </div>
        <div className="OrganizationsCard__info">
          <h2 className="OrganizationsCard__info--title">
            {this.props.allOrganizations.program_name}
          </h2>
          <p>
            <b>Program type:</b> {this.props.allOrganizations.program_type}
          </p>
          <p>
            <b>Location:</b> {this.props.allOrganizations.location}
          </p>
          <p className="OrganizationsCard__info--details">
            {this.props.allOrganizations.description}
          </p>
          {/* donation tags */}
          <p className="OrganizationsCard__info--status">
            Donations in need:{" "}
            {this.state.donationList.map((donation) => {
              if (donation.status === "In Need") {
                return <span className="in-need">{donation.itemName}</span>;
              }
            })}
          </p>
          <p className="OrganizationsCard__info--status">
            Surplus donations:{" "}
            {this.state.donationList.map((donation) => {
              if (donation.status === "Surplus") {
                return <span className="surplus">{donation.itemName}</span>;
              }
            })}
          </p>

          <div className="OrganizationsCard__links">
            <Link
              className="OrganizationsCard__links--learn-more"
              to={{
                pathname: `organizations/${this.props.allOrganizations.accountId}`,
              }}
            >
              Learn More
            </Link>
            <a
              className="OrganizationsCard__links--website"
              target="_blank"
              href={this.props.allOrganizations.website}
            >
              Website
              <img className="OrganizationsCard__link-icon" src={linkIcon} />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default OrganizationsCard;

// const OrganizationsCard = (props) => {
//   if (!props.allOrganizations) {
//     return null;
//   }

//   return (
//     <>
//       <div className="OrganizationsCard">
//         <div className="OrganizationsCard__img-container">
//           <img
//             className="OrganizationsCard__img-container--img"
//             src={props.allOrganizations.image}
//             alt={props.allOrganizations.program_name}
//           />
//         </div>
//         <div className="OrganizationsCard__info">
//           <h2 className="OrganizationsCard__info--title">
//             {props.allOrganizations.program_name}
//           </h2>
//           <p>
//             <b>Program type:</b> {props.allOrganizations.program_type}
//           </p>
//           <p>
//             <b>Location:</b> {props.allOrganizations.location}
//           </p>
//           <p className="OrganizationsCard__info--details">
//             {props.allOrganizations.description}
//           </p>
//           {/* <p className="">
//             Donations in need:
//             {props.allOrganizations.donations.map((donation) => {
//               if (donation.status === "In Need") {
//                 return <span className="">{donation.itemName}</span>;
//               }
//             })}
//           </p>
//           <p className="">
//             Surplus donations:
//             {props.allOrganizations.donations.map((donation) => {
//               if (donation.status === "Surplus") {
//                 return <span className="">{donation.itemName}</span>;
//               }
//             })}
//           </p> */}
//           <div className="OrganizationsCard__links">
//             <Link
//               className="OrganizationsCard__links--learn-more"
//               to={{
//                 pathname: `organizations/${props.allOrganizations.accountId}`,
//               }}
//             >
//               Learn More
//             </Link>
//             <a
//               className="OrganizationsCard__links--website"
//               target="_blank"
//               href={props.allOrganizations.website}
//             >
//               Website
//               <img className="OrganizationsCard__link-icon" src={linkIcon} />
//             </a>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default OrganizationsCard;
