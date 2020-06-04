async function google_fit_connect() {
  const link =
    "https://www.googleapis.com/fitness/v1/users/me/dataset:aggregate";
  const access_token =
    "Bearer ya29.a0AfH6SMDPwgxkRxNz06QPjlkmIzI97seKn7L8tqxAaOE_z5v6v_jZ5NSC0hUfvtEi3LPLdgZntmyF6gtSb0Fg4LyO9XEZzInaSjg7rV1ShQfjeGeiWaLaux2OlX4iAIeSFL0gwsEQ1bbhTLL62U4lfcrj4mPqNulH1nI";
  let response = await fetch(link, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      Authorization: access_token,
    },
    body: JSON.stringify({
      aggregateBy: [
        {
          dataTypeName: "com.google.activity.segment",
        },
      ],
      bucketByTime: { durationMillis: 86400000 },
      startTimeMillis: 1590948880584,
      endTimeMillis: 1591197469882,
    }),
  });

  let data = await response.json();
  google_fit_step(data);
}

function google_fit_step(res) {
  let html = ""
  let data_inside=""
  let data_all=""
  let buckets = res.bucket;
  console.log(buckets);
  for (var i = 0; i < res.bucket.length; i++) {
    let datasets = buckets[i].dataset;
    for (var j = 0; j < datasets.length; j++) {
      let points = datasets[j].point;
      for (var k = 0; k < points.length; k++) {
        console.log(points[k]);
        data_inside = ""
        let values = points[k].value;
        let starttime = Date(
          parseInt(points[k].startTimeNanos/1000000)
        );
        let endtime = Date(parseInt(points[k].endTimeNanos/1000000));
        //1591186828913000000
        data_inside += `<td>${starttime.toString()}</td>`
        data_inside += `<td>${endtime.toString()}</td>`
        console.log(`start time : ${starttime.toString()}`);
        console.log(`end time : ${endtime.toString()}`);
        for (var y = 0; y < values.length; y++) {
          console.log(values[y].intVal);
          let temp = data_inside
          temp += `<td>${values[y].intVal}</td>`
          html += `<tr>${temp}</tr>`
        }
      }
    }
  }
  console.log(html)
  document.getElementById('google_step_table').innerHTML = html
  console.log("dfasdfadsfs");
  //console.log(bucket.length)
}

google_fit_connect();
