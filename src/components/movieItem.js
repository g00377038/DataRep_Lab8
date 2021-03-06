import React from 'react';
import Card from 'react-bootstrap/Card';

export class MovieItem extends React.Component {
    render() {
        return (
            <div>
                {/*display movie details in card format*/}
                <Card>
                    <Card.Header>
                        {this.props.myMovie.title}
                    </Card.Header>

                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <img src={this.props.myMovie.poster} width="200" length="200"></img>
                            <footer className="blockquote-footer">
                                <p>{this.props.myMovie.year}</p>
                            </footer>
                        </blockquote>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}