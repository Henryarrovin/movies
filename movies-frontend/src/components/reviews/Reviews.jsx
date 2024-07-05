import React from 'react';
import {useEffect, useRef} from 'react';
import api from '../../api/axiosConfig';
import {useParams} from 'react-router-dom';
import {Container, Row, Col} from 'react-bootstrap';
import ReviewForm from '../reviewForm/ReviewForm';

const Reviews = ({getMovieData,movie,reviews,setReviews}) => {

    const revText = useRef();
    let params = useParams();
    const movieId = params.movieId;
    // const { movieId } = useParams();

    useEffect(()=>{
        getMovieData(movieId);
    },[])

    const addReview = async (e) =>{

        e.preventDefault();
        const rev = revText.current;
        try {
            if(rev.value === "") {
                alert("Please enter a review!");
            } else {
                const response = await api.post("/reviews",{reviewBody:rev.value,imdbId:movieId});
                const updatedReviews = [...reviews, {body:rev.value}];
                rev.value = "";
                setReviews(updatedReviews);
            }
        }
        catch(err) {
            console.error(err);
        }
        
    }

  return (
    <Container>
        <Row>
            <Col><h3>Reviews</h3></Col>
        </Row>
        <Row className="mt-2">
            <Col>
                <img src={movie?.poster} alt="" />
            </Col>
            <Col>
                {
                    <div>
                        <Row>
                            <Col>
                                <ReviewForm handleSubmit={addReview} revText={revText} labelText = "Write a Review?" defaultValue={"Enter review ..."}/>  
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <hr />
                            </Col>
                        </Row>
                    </div>
                }
                {
                    reviews?.map((review, index) => {
                        return(
                            <div key={index}>
                                <Row>
                                    <Col className='text-white'>{review.body}</Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <hr style={{ borderTop: "1px solid white" }}/>
                                    </Col>
                                </Row>                              
                            </div>
                        )
                    })
                }
            </Col>
        </Row>
        <Row>
            <Col>
                <hr />
            </Col>
        </Row>        
    </Container>
  )
}

export default Reviews;