function login(uin, pwd, steps) {
    $('#load').html('正在打卡中，请稍等...');
    var data = {
        "phoneNumber": uin,
        "password": pwd,
        "steps": steps
    };
    var request = $.post({
        //  type: "POST",
        //发送请求的地址以及传输的数据
        url: "/mi/exec",
        contentType: "application/json;charset=UTF-8",
        //dataType: "json",
        data: JSON.stringify(data),
        async: false,
        success: function (data) {
            $('#login').hide();
            $('#submit').hide();
            if (data.code == 200) {
                $('#load').html(data.data);
            } else {
                $('#load').html('打卡失败！' + data.message);
                $('#login').show();
                $('#submit').show();
            }
        },
        error: function (jqXHR) {
            $('#load').html('打卡失败！');
            //请求失败函数内容
            console.log('错误原因：', jqXHR);
        },
        failure: function (result) {
            console.log('失败原因：', result);
        },
    });
    //终止请求动作.
    request.abort();
}


$(document).ready(function () {
    //打卡
    $('#submit').click(function () {
        var phoneNumber = $('#uin').val(),
            password = $('#pwd').val(),
            steps = $('#steps').val();
        if (phoneNumber == '' || password == '' || steps == '') {
            alert("请确保每项不能为空！");
            return false;
        }

        $('#load').show();
        login(phoneNumber, password, steps);
    });


});