const app = require("express")();
const jobs = {};

app.post("/submit", (_req, res) => {
  const jobId = `job:${Date.now()}`;
  jobs[jobId] = 0;
  updateJob(jobId, 0);
  res.end(`Job submitted successfully: ${jobId}`);
});

app.get("/checkstatus", async (req, res) => {
  console.log(jobs[req.query.jobId]);
  while ((await checkJobComplete(req.query.jobId)) == false) {
    res.end(`Job is ${jobs[req.query.jobId]}% complete`);
  }
});

app.listen(8080, () => console.log("Server is running on port 8080"));

async function checkJobComplete(jobId) {
  return new Promise((resolve, _reject) => {
    if (jobs[jobId] < 100) this.setTimeout(() => resolve(false), 1000);
    else resolve(true);
  });
}

function updateJob(jobId, progress) {
  jobs[jobId] = progress;

  if (progress == 100) return;
  this.setTimeout(() => {
    updateJob(jobId, progress + 10);
  }, 3000);
}
