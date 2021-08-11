
import React, { useState, useEffect, useContext } from 'react'
import { ProfileUserContext } from '../sideBar/ProfileUserContext'
import moment from 'moment'
import EditIcon from '@material-ui/icons/Edit'
import { Breadcrumb, Container, Row, Col, Card } from 'react-bootstrap'
import EmailIcon from '@material-ui/icons/Email'
import PhoneIcon from '@material-ui/icons/Phone'
import LanguageIcon from '@material-ui/icons/Language'
import CakeIcon from '@material-ui/icons/Cake'
import ContactMailIcon from '@material-ui/icons/ContactMail'

const Profile = () => {
    const [profile, setProfile] = useState([])
    const [user, setUser] = useContext(ProfileUserContext)

    let profileUser = {
        "results": [
            {
                "gender": "male",
                "destination": "Product desiner",
                "name": {
                    "title": 'Mr',
                    "first": "Brad",
                    "last": "Gibson"
                },
                'about': "Hi! My name is Brad bibson. I'm a createve geek from Prague. I enjoye creating eye candy solution form web and mobile app.",
                "website": "wwww.bradgibson.com",
                "location": {
                    "street": "9278 new road",
                    "city": "kilcoole",
                    "state": "waterford",
                    "postcode": "93027",
                    "coordinates": {
                        "latitude": "20.9267",
                        "longitude": "-7.9310"
                    },
                    "timezone": {
                        "offset": "-3:30",
                        "description": "Newfoundland"
                    }
                },
                "email": "brad.gibson@example.com",
                "login": {
                    "uuid": "155e77ee-ba6d-486f-95ce-0e0c0fb4b919",
                    "username": "silverswan131",
                    "password": "firewall",
                    "salt": "TQA1Gz7x",
                    "md5": "dc523cb313b63dfe5be2140b0c05b3bc",
                    "sha1": "7a4aa07d1bedcc6bcf4b7f8856643492c191540d",
                    "sha256": "74364e96174afa7d17ee52dd2c9c7a4651fe1254f471a78bda0190135dcd3480"
                },
                "dob": {
                    "date": "1993-07-20T09:44:18.674Z",
                    "age": 26
                },
                "registered": {
                    "date": "2002-05-21T10:59:49.966Z",
                    "age": 17
                },
                "phone": "011-962-7516",
                "cell": "081-454-0666",
                "id": {
                    "name": "PPS",
                    "value": "0390511T"
                },
                "prgofile_thum": {
                    'image': 'https://i.redd.it/ayot3vxt7e561.jpg'
                },
                "picture": {
                    "large": "https://randomuser.me/api/portraits/men/75.jpg",
                    "medium": "https://randomuser.me/api/portraits/med/men/75.jpg",
                    "thumbnail": "https://randomuser.me/api/portraits/thumb/men/75.jpg"
                },
                "nat": "IE"
            }
        ]
    }
    useEffect(() => {
        setProfile(profileUser)
    }, [])

    // console.log(profile)

    return (
        <div className="rm-body">
            <div className="profile_thum">
                <Container fluid>
                    <Row>
                        <Col lg={12} md={12} sm={12} xs={12}>
                            <h4 className="rm_global_heading">Profile</h4>
                            <Breadcrumb>
                                <Breadcrumb.Item href="#">Page</Breadcrumb.Item>
                                <Breadcrumb.Item active>Profile</Breadcrumb.Item>
                            </Breadcrumb>
                            <div className="rm_thum_pic">
                                <img src={profileUser.results[0].prgofile_thum.image} alt="" className="w-100 th_" />
                                <div className="profile__">
                                    <div className="profile_image">
                                        <img src={profileUser.results[0].picture.large} alt="" />
                                    </div>
                                    <div className="profile_content">
                                        <h5>{profileUser.results[0].name.title || "--"} {profileUser.results[0].name.first}  {profileUser.results[0].name.last}</h5>
                                        <h6>{profileUser.results[0].destination}</h6>
                                    </div>
                                </div>
                                <a href="/edit-profile" className="edit_profile"><EditIcon /> Edit profile</a>
                            </div>
                        </Col>
                        <Col lg={4} md={4} sm={4} xs={12}>
                            <Card className="card_pad_">
                                <h5>About</h5>
                                <p>{profileUser.results[0].about}</p>
                                <ul>
                                    <li><EmailIcon /> {profileUser.results[0].email}</li>
                                    <li><PhoneIcon /> {profileUser.results[0].phone}</li>
                                    <li><LanguageIcon /> {profileUser.results[0].website}</li>
                                    <li><CakeIcon /> {moment(profileUser.results[0].dob.date).format("DD/MM/YYYY")}</li>
                                    <li><ContactMailIcon /> {profileUser.results[0].location.street}, {profileUser.results[0].location.city} {profileUser.results[0].location.state},  {profileUser.results[0].location.postcode}</li>
                                </ul>
                            </Card>
                        </Col>
                        <Col lg={5} md={5} sm={3} xs={12}>
                            <Card className="card_pad_">
                                <h5>Post</h5>
                            </Card>
                        </Col>
                        <Col lg={3} md={4} sm={3} xs={12}>
                            <Card className="card_pad_" sty>
                                <h5>Media</h5>
                            </Card>
                            <Card className="card_pad_">
                                <h5>Team Member</h5>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default Profile
