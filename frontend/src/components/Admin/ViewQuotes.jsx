import { useEffect, useState } from "react";
import { listQuotes, updateQuote } from "../../services/apiServices";

const ViewQuotes = () => {
  const [quotes, setQuotes] = useState([]);
  const [prices, setPrices] = useState({});

  useEffect(() => {
    loadQuotes();
  }, []);

  const loadQuotes = async () => {
    const data = await listQuotes();

    // handle different response formats
    if (Array.isArray(data)) {
      setQuotes(data);
    } else if (Array.isArray(data.data)) {
      setQuotes(data.data);
    } else {
      setQuotes([]);
    }
  };

  const handlePriceChange = (id, value) => {
    setPrices({ ...prices, [id]: value });
  };

  const handleSendQuote = async (quote) => {
    const price = prices[quote._id];

    if (!price) {
      alert("Enter price");
      return;
    }

    await updateQuote(quote._id, {
      finalPrice: price,
    });

    alert("Quote sent");

    loadQuotes();
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Customer</th>
          <th>Email</th>
          <th>Service</th>
          <th>From</th>
          <th>To</th>
          <th>Estimated</th>
          <th>Final Price</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>
        {quotes.map((q) => (
          <tr key={q._id}>
            <td>{q.userId?.name}</td>
            <td>{q.userId?.email}</td>
            <td>{q.service}</td>
            <td>{q.fromLocation}</td>
            <td>{q.toLocation}</td>
            <td>₹{q.estimatedPrice}</td>

            <td>
              {q.finalPrice ? (
                <span className="text-success fw-bold">₹{q.finalPrice}</span>
              ) : (
                <div className="input-group input-group-sm">
                  <span className="input-group-text">₹</span>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Enter price"
                    onChange={(e) => handlePriceChange(q._id, e.target.value)}
                  />
                </div>
              )}
            </td>

            <td>
              <button
                className="btn btn-success btn-sm"
                disabled={q.finalPrice}
                onClick={() => handleSendQuote(q)}
              >
                {q.finalPrice ? "Sent" : "Send Quote"}
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ViewQuotes;
