import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Loading from '../../components/Loading';
import Card from 'react-bootstrap/Card';

const Detail = () => {
  const [char, setChar] = useState(null);
  const [loading, setLoading] = useState(true);
  const { char_id } = useParams();

  useEffect(() => {
    axios(`${process.env.REACT_APP_API_BASE_ENDPOINT}/characters/${char_id}`)
      .then(res => res.data)
      .then(data => setChar(data[0]))
      .finally(() => setLoading(false));
  }, [char_id]);

  return (
    <div>
      {loading && <Loading />}
      {char && (
        <Card className="bg-dark text-white d-flex flex-row m-4">
          <Card.Img variant="bottom" src={char.img} className="w-25" />
          <Card.Body>
            <Card.Title>{char.name}</Card.Title>
            <Card.Text>
              <div>Occupation: {char.occupation.join(', ')}</div>
              <div>Nickname: {char.nickname}</div>
              <div>Status: {char.status}</div>
              <div>Portrayed: {char.portrayed}</div>
            </Card.Text>
          </Card.Body>
        </Card>
      )}
    </div>
  );
};

export default Detail;