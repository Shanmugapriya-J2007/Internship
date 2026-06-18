import React, { useState } from "react";

function App() {
  const [participants, setParticipants] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [workshop, setWorkshop] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const isDuplicate = participants.some(
      (participant) => participant.email.toLowerCase() === email.toLowerCase()
    );

    if (isDuplicate) {
      setMessage("⚠️ This email is already registered.");
      return;
    }

    const newParticipant = { name, email, workshop };

    setParticipants([...participants, newParticipant]);
    setMessage(`✅ Registration Successful! Welcome ${name} to ${workshop}.`);

    setName("");
    setEmail("");
    setWorkshop("");
  };

  return (
    <div
      style={{
        maxWidth: "700px",
        margin: "30px auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "10px",
        fontFamily: "Arial",
      }}
    >
      <h1 style={{ textAlign: "center" }}>
        Workshop Registration & Confirmation App
      </h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "10px",
          }}
        />

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "10px",
          }}
        />

        <select
          value={workshop}
          onChange={(e) => setWorkshop(e.target.value)}
          required
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "10px",
          }}
        >
          <option value="">Select Workshop</option>
          <option value="React JS">React JS</option>
          <option value="Python">Python</option>
          <option value="AI & ML">AI & ML</option>
          <option value="Web Development">Web Development</option>
        </select>

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          Register
        </button>
      </form>

      {message && (
        <h3 style={{ textAlign: "center", marginTop: "15px" }}>{message}</h3>
      )}

      <h2>Participant List</h2>

      {participants.length === 0 ? (
        <p>No registrations yet.</p>
      ) : (
        <table
          border="1"
          cellPadding="10"
          width="100%"
          style={{ borderCollapse: "collapse" }}
        >
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Workshop</th>
            </tr>
          </thead>
          <tbody>
            {participants.map((participant, index) => (
              <tr key={index}>
                <td>{participant.name}</td>
                <td>{participant.email}</td>
                <td>{participant.workshop}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;
