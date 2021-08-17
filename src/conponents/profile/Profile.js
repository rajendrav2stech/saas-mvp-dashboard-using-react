import React from 'react'
import moment from 'moment'
import { Container, Row, Col, Card } from 'react-bootstrap'
import profileUser from '../../data/userProfileData.json'
import { FaRegEnvelope, FaPhoneAlt, FaGlobeAmericas, FaBirthdayCake, FaAddressCard } from "react-icons/fa";

const Profile = () => {
    return (
        <div className="rm-body">
            <div className="profile_thum">
                <Container fluid>
                    <Row>
                        <Col lg={12} md={12} sm={12} xs={12}>
                            <h4 className="rm_global_heading">Profile</h4>
                            <div className="rm_thum_pic">
                                <img src={profileUser[0].prgofile_thum.image} alt={profileUser[0].name.first} className="w-100 th_" />
                                <div className="profile__">
                                    <div className="profile_image">
                                        <img src={profileUser[0].picture.large} alt={profileUser[0].name.first} />
                                    </div>
                                    <div className="profile_content">
                                        <h5>{profileUser[0].name.first}  {profileUser[0].name.last}</h5>
                                        <h6>{profileUser[0].destination}</h6>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} md={4} sm={4} xs={12}>
                            <Card className="card_pad_">
                                <h5>About</h5>
                                <p>{profileUser[0].about}</p>
                                <ul>
                                    <li><FaRegEnvelope /> {profileUser[0].email}</li>
                                    <li><FaPhoneAlt /> {profileUser[0].phone}</li>
                                    <li><FaGlobeAmericas /> {profileUser[0].website}</li>
                                    <li><FaBirthdayCake /> {moment(profileUser[0].dob.date).format("DD/MM/YYYY")}</li>
                                    <li><FaAddressCard /> {profileUser[0].location.street}, {profileUser[0].location.city} {profileUser[0].location.state},  {profileUser[0].location.postcode}</li>
                                </ul>
                            </Card>
                        </Col>
                        <Col lg={5} md={5} sm={3} xs={12}>
                            <Card className="card_pad_ post">
                                <div className="post_">
                                    <div className="user_">
                                        <img src={profileUser[0].picture.large} alt={profileUser[0].name.first} />
                                        <div>
                                            <h5>{profileUser[0].name.first}  {profileUser[0].name.last}</h5>
                                            <h6>{profileUser[0].post.time}</h6>
                                        </div>
                                    </div>

                                </div>
                                <div className="post_review">
                                    <h5>
                                        <span>{profileUser[0].post.review}</span>
                                        <span className="tags">{profileUser[0].post.tag} </span>
                                    </h5>
                                    <img src={profileUser[0].post.postImage} alt={profileUser[0].name.first} />
                                </div>
                            </Card>
                        </Col>
                        <Col lg={3} md={4} sm={3} xs={12}>
                            <Card className="card_pad_ media" sty>
                                <h5>Media</h5>
                                <ul>
                                    {
                                        profileUser[0].media.map((items, i) => {
                                            return (
                                                <li key={i}>
                                                    <img src={items.url} alt={profileUser[0].name.first} />
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default Profile
