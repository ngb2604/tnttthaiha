
const announcements = [
  "Các tân dự trưởng chú ý đi chầu, lễ vào tối thứ 5!!!",
  "Khánh Huyền, Nhật Hà, Gia Bảo xin bme đi countdown cùng ban shoat.",
  
];


const schedule = [
  { day: "Thứ Hai", time: "19h30", activity: "Học lớp dự trưởng" },
  { day: "Thứ Ba", time: "19h", activity: "Tập hoạt cảnh Giáng sinh" },
  { day: "Thứ Tư", time: "Không có", activity: "-" },
  { day: "Thứ Năm", time: "19h30", activity: "Học lớp dự trưởng" },
  { day: "Thứ Sáu", time: "19h", activity: "Tập hoạt cảnh Giáng sinh" },
  { day: "Thứ Bảy", time: "Không có", activity: "-" },
  { day: "Chủ Nhật", time: "14h", activity: "Sinh hoạt" }
];


const announcementList = document.getElementById("announcement-list");
announcements.forEach(text => {
  const li = document.createElement("li");
  li.textContent = text;
  announcementList.appendChild(li);
});


const scheduleBody = document.getElementById("schedule-body");
schedule.forEach(item => {
  const row = document.createElement("tr");
  row.innerHTML = `<td>${item.day}</td><td>${item.time}</td><td>${item.activity}</td>`;
  scheduleBody.appendChild(row);
});