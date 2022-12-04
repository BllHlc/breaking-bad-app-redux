import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllQuotes, quotesSelector, statusSelector, errorSelector } from '../../redux/quotesSlice';
import Error from '../../components/Error';
import Loading from '../../components/Loading';
import Item from './item';
import ListGroup from 'react-bootstrap/ListGroup';

const Quotes = () => {
  const dispatch = useDispatch();
  const quotes = useSelector(quotesSelector);
  const status = useSelector(statusSelector);
  const error = useSelector(errorSelector);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchAllQuotes());
    }
  }, [dispatch, status]);

  if (error) {
    return <Error message={error} />;
  }

  return (
    <div style={{ padding: 10 }}>
      <h1>Quotes</h1>
      {status === 'loading' && <Loading />}
      {status === 'succeeded' && (
        <ListGroup variant="flush">
          {quotes.map((quote) => (
            <ListGroup.Item key={quote.quote_id}>
              <Item key={quote.quote_id} item={quote} />
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}
      {status === 'succeeded' && <div className="quotes_info">{quotes.length} quotes</div>}
    </div>
  );
};

export default Quotes;