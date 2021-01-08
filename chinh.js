var slider = document.getElementById("myRange");
var output = document.getElementById("txtgiamgia");
output.innerHTML = slider.value;

slider.oninput = function() {
    output.innerHTML = this.value;
    document.getElementById("txtgiamgia").value = this.value;
    document.getElementById("txtgiamgia").style.color = "red";
}

function myFunctiongiamgia() {

    let a = document.getElementById("txttensanpham").value;
    let b = document.getElementById("txtgiatien").value;
    let c = document.getElementById("txtgiamgia").value;
    let d = (b * [(100 - c) / 100]);
    // Math.ceil()
    handleLoading2(a, b, c, d);
    handleRemoveImg1('#anh');
}


function handleLoading2(a, b, c, d) {
    let timerInterval
    Swal.fire({
        title: `Sản phẩm ${a}`,
        imageUrl: 'https://i.pinimg.com/originals/e3/25/f4/e325f4261b806e92d6ac6259ea966c68.gif',
        imagewidth: 500,
        imageheight: 300,
        imageAlt: 'custom',
        html: 'I will close in <b></b> milliseconds.',
        timer: 2000,
        timerProgressBar: true,
        showConfirmButton: false,
        didOpen: () => {
            Swal.showLoading()
            timerInterval = setInterval(() => {
                const content = Swal.getContent()
                if (content) {
                    const b = content.querySelector('b')
                    if (b) {
                        b.textContent = Swal.getTimerLeft()
                    }
                }
            }, 100);
            demo(1);
        },
        willClose: () => {
            clearInterval(timerInterval);
            demo(0);
        }
    }).then((result) => {
        Swal.fire({
            imageUrl: 'https://i.pinimg.com/originals/10/61/97/106197a38ab68211a24c4e4a307c13ec.gif',
            imagewidth: 500,
            imageheight: 300,
            imageAlt: 'custom',
            title: `<strong>Sản phẩm: ${a.toUpperCase()}`,
            icon: 'info',
            width: 500,
            html: `<div class="card">
                <div class="card-body">
                    <p class="card-text">Giá tiền: ${b}VNĐ</p>
                    <p class="card-text">Giảm giá: ${c}%</p>
                    <p class="card-text">Có giá là: ${d}VNĐ</p> 
                    </div>
                    </div>`,
            showCloseButton: true,
            showCancelButton: true,
            focusConfirm: false,
            confirmButtonText: '<i class="fa fa-thumbs-up"></i> Okee!',
            confirmButtonAriaLabel: 'Thumbs up, great!',
            cancelButtonText: '<i class="fa fa-thumbs-down"></i> Thoát',
            cancelButtonAriaLabel: 'Thumbs down'
        })
    })
}

function demo(value) {
    var e = document.querySelector("body");
    if (value == 1) {
        e.classList.add("div1");
    } else {
        e.classList.remove("div1")
    }
}

function myFunctionbanra() {

    objModal = {
        titleName: "TÍNH SẢN PHẨM BÁN RA",
        Content: "Sản phẩm của bạn có:"
    };

    let titleName = document.getElementById("titleName").innerHTML = objModal.titleName;

    let content = document.getElementById("content").innerHTML = objModal.Content

    let g = document.getElementById("txttensanpham1").value;
    document.getElementById("gettxttensanpham1").innerHTML = g.toUpperCase();
    let w = document.getElementById("txttongsanpham").value;
    document.getElementById("gettxttongsanpham").innerHTML = w + "(sp)";
    let r = document.getElementById("txttonkho").value;
    document.getElementById("gettxttonkho").innerHTML = r + "(sp)";

    function handleNumbers(w, r) {
        objScore = {
            ScorceTotal: (w - r)
        }
        document.getElementById("getvaluetotalScore").innerHTML = Math.round(objScore.ScorceTotal * 100) / 100 + "(sp)";


    }
    handleNumbers(w, r);

    var myData = [r, objScore.ScorceTotal];
    var ctx = document.getElementById('myChart');
    var myPieChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['tồn kho', 'bán ra'],
            datasets: [{
                data: myData,
                backgroundColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)'

                ]
            }]
        },
        options: {
            responsive: true,
            title: {
                display: true,
            },
            tooltips: {
                mode: 'index',
                intersect: false,
            },
            // hover: {
            //     mode: 'nearest',
            //     intersect: true
            // }
        }
    });
    // handleRemoveImg1('#anh');
    handleRemove('#myChart');
    clearArray(myData);
    return setTimeout(function() {
        clearArray();
    }, 1000)
}

function handleRemoveImg1(valueImg) {
    let getValue = document.querySelector(valueImg);
    if (getValue == 1) {
        getValue.remove();
    } else {
        getValue.add();
    }
}

function myFunctionlaigui() {
    let t = document.getElementById("txttenkhachhang").value;;
    let h = document.getElementById("txtsotiengui").value;
    let j = document.getElementById("txtlaisuat").value;
    let k = document.getElementById("txtkyhangui").value;
    let q = (parseFloat(h) * ((parseFloat(j) / 100) / 360) * (30 * parseFloat(k)))
    let o = (parseFloat(h) + ((parseFloat(h) * ((parseFloat(j) / 100) / 360) * (30 * parseFloat(k))) * parseFloat(k))) + "VNĐ";
    handleLoading1(t, h, j, k, q, o);
}

function handleLoading1(t, h, j, k, q, o) {
    let timerInterval
    Swal.fire({
        title: `Khách hàng ${t}`,
        imageUrl: 'https://media1.tenor.com/images/8936d5c26030b790b3998af67b3e54ff/tenor.gif?itemid=12498622',
        imagewidth: 500,
        imageheight: 300,
        imageAlt: 'custom',
        html: 'I will close in <b></b> milliseconds.',
        timer: 2000,
        timerProgressBar: true,
        showConfirmButton: false,
        didOpen: () => {
            Swal.showLoading()
            timerInterval = setInterval(() => {
                const content = Swal.getContent()
                if (content) {
                    const b = content.querySelector('b')
                    if (b) {
                        b.textContent = Swal.getTimerLeft()
                    }
                }
            }, 100);
            demo(1);
        },
        willClose: () => {
            clearInterval(timerInterval);
            demo(0);
        }
    }).then((result) => {
        Swal.fire({
            imageUrl: 'https://i.pinimg.com/originals/10/61/97/106197a38ab68211a24c4e4a307c13ec.gif',
            imagewidth: 500,
            imageheight: 300,
            imageAlt: 'custom',
            title: `<strong>Khách hàng: ${t.toUpperCase()}`,
            icon: 'info',
            width: 500,
            html: `<div class="card">
                <div class="card-body">
                    <p class="card-text">Số tiền gửi: ${h}VNĐ</p>
                    <p class="card-text">Lãi xuất: ${j}%/năm</p>
                    <p class="card-text">Kỳ hạn gửi: ${k}tháng</p>
                    <p class="card-text">Tiền lãi hàng tháng: ${q}VNĐ</p>
                    <p class="card-text">Tổng số tiền nhận được sau kỳ hạn gửi là: ${o}VNĐ</p> 
                    </div>
                    </div>
                    `,
            showCloseButton: true,
            showCancelButton: true,
            focusConfirm: false,
            confirmButtonText: '<i class="fa fa-thumbs-up"></i> Okee!',
            confirmButtonAriaLabel: 'Thumbs up, great!',
            cancelButtonText: '<i class="fa fa-thumbs-down"></i> Thoát',
            cancelButtonAriaLabel: 'Thumbs down'
        })
    })
}



function myFunctionlaivay() {
    // create an object get value dymanic for modal 
    objModal = {
        titleName: "TÍNH LÃI SUẤT VAY NGÂN HÀNG",
        Content: "Lãi suất dự tính của bạn là:"
    };

    let titleName = document.getElementById("titleName").innerHTML = objModal.titleName;

    let content = document.getElementById("content").innerHTML = objModal.Content
    let u = document.getElementById("txtnguoivay").value;
    document.getElementById("gettxtnguoivay").innerHTML = u.toUpperCase();
    let n = document.getElementById("txtsotienvay").value;
    document.getElementById("gettxtsotienvay").innerHTML = n + "VNĐ";
    let m = document.getElementById("txtlaivay").value;
    document.getElementById("gettxtlaivay").innerHTML = m + "%/năm";
    let v = document.getElementById("txtkyhanvay").value;
    document.getElementById("gettxtkyhanvay").innerHTML = v + "tháng";

    function handleNumbers(n, m, v) {
        objScore = {
            ScorceTotal: (parseFloat(n) * ((parseFloat(m) / 100) / parseFloat(v)))
        }
        document.getElementById("getvaluelaihangthang").innerHTML = Math.round(objScore.ScorceTotal * 100) / 100 + "VNĐ";
        document.getElementById("getvaluetotalScore2").innerHTML = (parseFloat(n) / parseFloat(v)) + (Math.round(objScore.ScorceTotal * 100) / 100) + "VNĐ";
    }
    handleNumbers(n, m, v);
}

function lammoi() {
    document.getElementById("xoa").reset();
    document.getElementById("xoa1").reset();
    document.getElementById("xoa2").reset();
    document.getElementById("xoa3").reset();
}

function clearArray(myData) {
    let array2 = [];
    myData = arr2;
    console.log(myData);

}