import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { quotesSelector } from '../../redux/quotesSlice';
import { useEffect } from 'react';

const QuoteDetail = () => {
  const { quote_id } = useParams();
  const navigate = useNavigate();
  const quote = useSelector(quotesSelector).find((quote) => quote.quote_id === Number(quote_id));

  useEffect(() => {
    if (!quote) {
      navigate('/quotes');
    }
  }, [quote, navigate]);



  return (
    <div style={{ padding: 10 }}>
      <h1>Quote Detail</h1>
      <div class="alert alert-dark">
        <h4 class="alert-heading">{quote?.quote}</h4>
        <p>{quote?.author}</p>
        <hr />
        <p class="mb-0">Category: {quote?.series}</p>
      </div>
    </div>
  );
};

export default QuoteDetail;