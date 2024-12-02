import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Courses() {
  return (
    <>
    <div className='' style={{paddingTop:'128px'}}>
        <div className='d-flex justify-content-center'>
        <h2>COURSES OFFERED</h2>

        </div>
    <div className='d-flex gap-4 justify-content-center mt-5 flex-wrap'>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>IGCSE/OLevel-6025 & 5054</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button className='bg-banner'>Learn More</Button>
      </Card.Body>
    </Card>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>IGCSE/OLevel-6025 & 5054</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button className='bg-banner'>Learn More</Button>
        </Card.Body>
      </Card>
          <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>IGCSE/OLevel-6025 & 5054</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button className='bg-banner'>Learn More</Button>
          </Card.Body>
        </Card>
        </div>
        </div>
        </>
  );
}

export default Courses;