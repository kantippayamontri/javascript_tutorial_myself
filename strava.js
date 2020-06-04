async function get_strava_state(res) {
  //console.log(typeof(res))
  //console.log(typeof(res.access_token))
  let ride, run, data;
  const athletes_id = 59781079;
  const state_link = `https://www.strava.com/api/v3/athletes/${athletes_id}/stats?access_token=${res.access_token}`;
  let response = await fetch(state_link);
  // .then((res) => res.json())
  // .then(function (res) {
  //   ride = res.all_ride_totals;
  //   run = res.all_run_totals;
  // });
  data = await response.json();
  ride = data.all_ride_totals;
  run = data.all_run_totals;
  // console.log("ride");
  // console.log(ride);
  // console.log("run");
  // console.log(run);

  return [run, ride];
}

async function strava_reauth() {
  const auth_link = "https://www.strava.com/oauth/token";
  let response = await fetch(auth_link, {
    method: "post",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      client_id: "48940",
      client_secret: "60f8c51f5477abe54a38cfbfc9894026a85108aa",
      refresh_token: "e4970166b18447621722f0a4606ef4403b00f35c",
      grant_type: "refresh_token",
    }),
  });
  data = await response.json();
  data = await get_strava_state(data);
  await strava_show_html(data);
}

async function strava_show_html(data) {
  //console.log("strava_show_html");
  //console.log(data);
  rundata = data[0];
  ridedata = data[1];
  strava_run_html(rundata) //run data show html
  strava_ride_html(ridedata) //ride data show html
}

function strava_run_html(rundata) {
  //console.log("run data")
  //console.log(rundata)
  let html=""
  let data_inside=""
  data_inside += `<td>run</td>`
  data_inside += `<td>${rundata.count}</td>`
  data_inside += `<td>${rundata.distance}</td>`
  data_inside += `<td>${rundata.elapsed_time}</td>`
  data_inside += `<td>${rundata.elevation_gain}</td>`
  data_inside += `<td>${rundata.moving_time}</td>`
  html = `<tr>${data_inside}</tr>`
  document.getElementById('strava_run_table').innerHTML = html
}

function strava_ride_html(ridedata) {
  //console.log("ride data")
  //console.log(ridedata)
  let html=""
  let data_inside=""
  data_inside += `<td>ride</td>`
  data_inside += `<td>${ridedata.count}</td>`
  data_inside += `<td>${ridedata.distance}</td>`
  data_inside += `<td>${ridedata.elapsed_time}</td>`
  data_inside += `<td>${ridedata.elevation_gain}</td>`
  data_inside += `<td>${ridedata.moving_time}</td>`
  html = `<tr>${data_inside}</tr>`
  document.getElementById('strava_ride_table').innerHTML = html
}

strava_reauth();
