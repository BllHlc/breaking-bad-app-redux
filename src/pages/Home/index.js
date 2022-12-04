import './styles.css';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCharacters } from '../../redux/charactersSlice';
import Masonry from 'react-masonry-css';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const Home = () => {
  const dispatch = useDispatch();
  const characters = useSelector(state => state.characters.items);
  const nextPage = useSelector(state => state.characters.page);
  const hasNextPage = useSelector(state => state.characters.hasNextPage);
  const status = useSelector(state => state.characters.status);
  const error = useSelector(state => state.characters.error);


  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchCharacters(nextPage));
    }
  }, [status, dispatch, nextPage]);



  if (status === 'failed') {
    return <Error message={error} />;
  }

  return (
    <div className='m-4'>
      <Masonry
        breakpointCols={4}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column">
        {
          characters.map(character => (
            <div key={character.char_id}>
              <Link to={`/char/${character.char_id}`} className='text-decoration-none text-light' >
                <Card bg='dark' >
                  <Card.Img variant="top" src={character.img} />
                  <Card.Body>
                    <Card.Title className='text-decoration-none'>{character.name}</Card.Title>
                  </Card.Body>
                </Card>
              </Link>
            </div>
          ))
        }
      </Masonry>

      <div style={{ padding: "20px 0 40px 0", textAlign: "center" }}>
        {status === "loading" && <Loading />}
        {hasNextPage && status !== "loading" && <Button variant='outline-success' onClick={() => dispatch(fetchCharacters(nextPage))}>Load More ({nextPage})</Button>}
        {!hasNextPage && <div>There is noting to be shown</div>}
      </div>
    </div>
  );
};

export default Home;