const runners = [
  {
    email: "anna.kowalska@example.com",
    runner_number: "001",
    distance: "10km",
    discount: "50%",
    recorded: "Zapisany poprawnie"
  },
  {
    email: "jan.nowak@example.com",
    runner_number: "002",
    distance: "5km",
    discount: "25%",
    recorded: "Zapisany poprawnie"
  },
  {
    email: "ewa.wisniewska@example.com",
    runner_number: "003",
    distance: "1km",
    discount: "5%",
    recorded: "Zapisany poprawnie"
  },
  {
    email: "piotr.zielinski@example.com",
    runner_number: "004",
    distance: "9km",
    discount: "45%",
    recorded: "Zapisany poprawnie"
  },
  {
    email: "karolina.wojcik@example.com",
    runner_number: "005",
    distance: "4km",
    discount: "20%",
    recorded: "Zapisany poprawnie"
  }
];

export default function handler(req, res) {
  const email = req.query.email;

  const runner = runners.find(
    r => r.email.toLowerCase() === email.toLowerCase()
  );

  if (!runner) {
    return res.status(404).json({
      error: "Runner not found"
    });
  }

  res.status(200).json(runner);
}
``
