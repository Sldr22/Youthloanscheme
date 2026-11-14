// تمام معلومات صرف صارف کے اپنے براؤزر (sessionStorage) میں رہتی ہیں، کسی سرور پر نہیں جاتیں۔
document.addEventListener('DOMContentLoaded', function () {
  var f = document.getElementById('f');
  if (!f) return;
  var saved = {};
  try { saved = JSON.parse(sessionStorage.getItem('loan') || '{}'); } catch (e) {}
  Array.prototype.forEach.call(f.elements, function (el) {
    if (el.name && saved[el.name] !== undefined) el.value = saved[el.name];
  });
  f.addEventListener('submit', function (e) {
    e.preventDefault();
    Array.prototype.forEach.call(f.elements, function (el) {
      if (el.name) saved[el.name] = el.value;
    });
    try { sessionStorage.setItem('loan', JSON.stringify(saved)); } catch (e) {}
    location.href = f.dataset.next;
  });
});
