/**
 * Created by Administrator on 2016/11/4.
 */
$(function(){

    //投保人性质验证

    //企业
    $(".lc").click(function(){
        $("#company").prop({
            "checked" : true
        });
        $("#person").prop({
            "checked" : false
        });
        $("#insurer_company_wrap").css({
            "display" : "block"
        });
        $("#insurer_person_wrap").css({
            "display" : "none"
        });
    });
    //个人
    $(".lp").click(function(){
        $("#company").prop({
            "checked" : false
        });
        $("#person").prop({
            "checked" : true
        });
        $("#insurer_company_wrap").css({
            "display" : "none"
        });
        $("#insurer_person_wrap").css({
            "display" : "block"
        });
    });


    //提交按钮
    $("#submit").click(function(){

        //被保险人姓名验证
        $(".insuredName").each(function(i){

                var insuredName = $(this).val();
                if( !(/^[\u4e00-\u9fa5A-Za-z\s·]{2,15}$/g.test( insuredName ))){
                    $(".insuredNameVal").eq(i).html("输入汉字为2~15字符且不能输入数字及特殊字符");
                    $(this).css({
                        "border-color" : "red"
                    });
                }else{
                    $(".insuredNameVal").eq(i).html("");
                    $(this).css({
                        "border-color": ""
                    });
                }

        });
        //被保险人身份证验证
            var numCard = $(".numCard").val();
            if( $("#idCard").prop( "checked" )  ){
                if( !(/\d{15}|\d{17}[0-9Xx]/.test( numCard )) ){
                    $(".numCardVal").html("输入证件号码不合法");
                    $(".numCard").css({
                        "border-color" : "red"
                    });
                }else{
                    $(".numCardVal").html("");
                    $(".numCard").css({
                        "border-color": ""
                    });
                }
            }else {
                if(  !(/.{0,30}/.test( numCard )) ){
                    $(".numCardVal").html("输入文本为0~30个字符");
                    $(".numCard").css({
                        "border-color" : "red"
                    });
                }else{
                    $(".numCardVal").html("");
                    $(".numCard").css({
                        "border-color": ""
                    });
                }
            }
        //被保险人出生日期验证
            var born = $(".born").val();
            if( born.length !=0 ) {
                if ($("#idCard").prop("checked")) {
                    var numCard = $(".numCard").val();
                    var yearC = numCard.substr(6, 4);
                    var monthC = numCard.substr(10, 2);
                    var dayC = numCard.substr(12, 2);
                    var yearB = born.substr(0, 4);
                    var monthB = born.substr(5, 2);
                    var dayB = born.substr(8, 2);
                    if (yearB != yearC || monthB != monthC || dayB != dayC) {
                        $(".bornVal").html("出生日期与所填身份证件不符");
                        $(".born").css({
                            "border-color": "red"
                        });
                    }else {
                        $(".bornVal").html("");
                        $(".born").css({
                            "border-color": ""
                        });
                    }
                } else {
                    $(".bornVal").html("");
                    $(".born").css({
                        "border-color": ""
                    });
                }
            }else{
                $(".bornVal").html("出生日期为必填项");
                $(".born").css({
                    "border-color": "red"
                });
            }
        //旅游目的地验证
            var destination = $(".destination").val();
            if( destination.length == 0 ){
                $(".destinationVal").html("旅游目的地为必填项");
                $(".destination").css({
                    "border-color": "red"
                });
            }else{
                $(".destinationVal").html("");
                $(".destination").css({
                    "border-color": ""
                });
            }

        //机构名称验证
            var comName = $(".comName").val();
            if( !(/.{1,100}/.test(comName)) ){
                $(".comNameVal").html("机构名称为1~100字符");
                $(".comName").css({
                    "border-color": "red"
                });
            }else{
                $(".comNameVal").html("");
                $(".comName").css({
                    "border-color": ""
                });
            }

        //组织机构代码验证
            var organization = $(".organization").val();
            if($("#yes").prop("checked")){
                if( !(/.{1,100}/.test(organization)) ){
                    $(".organizationVal").html("组织机构代码为1~100字符");
                    $(".organization").css({
                        "border-color": "red"
                    });
                }else{
                    $(".organizationVal").html("");
                    $(".organization").css({
                        "border-color": ""
                    });
                }
            }else{
                $(".organizationVal").html("");
                $(".organization").css({
                    "border-color": ""
                });
            }


        //地址验证
            var address = $(".address").val();
            if($("#yes").prop("checked")){
                if( !(/[\u4e00-\u9fa5]{6,100}/.test(address)) ){
                    $(".addressVal").html("地址为6~100个汉字");
                    $(".address").css({
                        "border-color": "red"
                    });
                }else{
                    $(".addressVal").html("");
                    $(".address").css({
                        "border-color": ""
                    });
                }
            }else{
                $(".addressVal").html("");
                $(".address").css({
                    "border-color": ""
                });
            }
        //联系人验证
            var contacts = $(".contacts").val();
            if($("#yes").prop("checked")){
                if( !(/^[\u4e00-\u9fa5A-Za-z\s·]{2,15}$/i.test(contacts)) ){
                    $(".contactsVal").html("联系人为6~100个汉字");
                    $(".contacts").css({
                        "border-color": "red"
                    });
                }else{
                    $(".contactsVal").html("");
                    $(".contacts").css({
                        "border-color": ""
                    });
                }
            }else{
                $(".contactsVal").html("");
                $(this).css({
                    "border-color": ""
                });
            }
        //联系电话验证
            var phone = $(".phone").val();
            if(!( /(13\d|14[57]|15[^4,\D]|17[678]|18\d)\d{8}|170[059]\d{7}/.test(phone)) || phone.substr(2,10) == "123456789"){
                $(".phoneVal").html("电话号码不合法");
                $(".phone").css({
                    "border-color": "red"
                });
            }else {
                $(".phoneVal").html("");
                $(".phone").css({
                    "border-color": ""
                });
            }

        //联系电话验证
            var phone1 = $(".phone1").val();
            if(!( /.+/.test(phone1))){
                $(".phone1Val").html("电话号码不能为空");
                $(".phone1").css({
                    "border-color": "red"
                });
            }else {
                $(".phone1Val").html("");
                $(".phone1").css({
                    "border-color": ""
                });
            }

        //企业性质验证
            var nature = $(".nature").val();
            if($("#yes").prop("checked")){
                if( !(/.{1,100}/i.test(nature)) ){
                    $(".natureVal").html("企业性质为1~100字符");
                    $(".nature").css({
                        "border-color": "red"
                    });
                }else{
                    $(".natureVal").html("");
                    $(".nature").css({
                        "border-color": ""
                    });
                }
            }else{
                $(".natureVal").html("");
                $(".nature").css({
                    "border-color": ""
                });
            }

        //电子邮箱验证
        $(".email").each(function(i){

                var email = $(this).val();
                if(!(/\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/.test(email))){
                    $(".emailVal").eq(i).html("邮箱不合法");
                    $(this).css({
                        "border-color": "red"
                    });
                }else{
                    $(".emailVal").eq(i).html("");
                    $(this).css({
                        "border-color": ""
                    });
                }
        });


        //保险起期/止期验证
        $(".date").each(function(i){
                var date = $(".date").eq(i).val();
                if(!(/.+/g.test(date))){
                    $(".dateVal").eq(i).html("不能为空");
                    $(this).css({
                        "border-color": "red"
                    });
                }else{
                    $(".dateVal").eq(i).html("");
                    $(this).css({
                        "border-color": ""
                    });
                }
        });


        // 投保人证件号码验证
            var numCard1 = $("#numCard1").val();
            if( $("#idCard1").prop( "checked" )  ){
                if( !(/\d{15}|\d{17}[0-9Xx]/.test( numCard1 )) ){
                    $(".numCard1Val").html("输入证件号码不合法");
                    $("#numCard1").css({
                        "border-color" : "red"
                    });
                }else{
                    $("#numCard1").html("");
                    $("#numCard1").css({
                        "border-color": ""
                    });
                }
            }else {
                if(  !(/.{0,30}/.test( numCard1 )) ){
                    $(".numCard1Val").html("输入文本为0~30个字符");
                    $("#numCard1").css({
                        "border-color" : "red"
                    });
                }else{
                    $(".numCard1Val").html("");
                    $("#numCard1").css({
                        "border-color": ""
                    });
                }
            }

        // 投保人出生日期验证
        var birth = $("#birth").val();
        if( birth.length !=0 ) {
            if ($("#idCard1").prop("checked")) {
                var numCard = $("#numCard1").val();
                var yearC = numCard.substr(6, 4);
                var monthC = numCard.substr(10, 2);
                var dayC = numCard.substr(12, 2);
                var yearB = birth.substr(0, 4);
                var monthB = birth.substr(5, 2);
                var dayB = birth.substr(8, 2);
                if (yearB != yearC || monthB != monthC || dayB != dayC) {
                    $(".birthVal").html("出生日期与所填身份证件不符");
                    $("#birth").css({
                        "border-color": "red"
                    });
                }else {
                    $(".birthVal").html("");
                    $("#birth").css({
                        "border-color": ""
                    });
                }
            } else {
                $(".birthVal").html("");
                $("#birth").css({
                    "border-color": ""
                });
            }
        }else{
            $(".birthVal").html("出生日期为必填项");
            $("#birth").css({
                "border-color": "red"
            });
        }

    //投保人联系电话验证
        var mobile = $(".mobile").val();
        if(!( /(13\d|14[57]|15[^4,\D]|17[678]|18\d)\d{8}|170[059]\d{7}/.test(mobile)) || mobile.substr(2,10) == "123456789"){
            $(".mobileVal").html("电话号码不合法");
            $(".mobile").css({
                "border-color": "red"
            });
        }else {
            $(".mobileVal").html("");
            $(".mobile").css({
                "border-color": ""
            });
        }


        var identifyType;         //被保人证件类型
        var sex;                  //被保人性别
        var name;                 //投保人姓名
        var identifyNumber;       //投保人证件号
        var identifyTypeA;        //投保人证件类型
        var birthday;             //投保人出生日期
        var sexA;                 //投保人性别
        var mobile;               //投保人手机
        var mail;                 //投保人邮箱
        var detailedAddress;      //投保人地址
        var relatedperson;        //投保人与被投保人关系
        var nameMechanism;        //机构名称
        var isMechanism;          //个人和机构区分
        var contactname;          //机构联系人
        var typeMechanism;        //企业性质
        var phoneMechanism;       //企业电话



        identifyType = $("#idCard").prop( "checked" )?"01":"02";
        sex = $("#man").prop( "checked" )?"1":"2";
        //投保人为机构（企业）
        if( $("#company").prop( "checked" ) ){
            name ="";
            identifyNumber = $("#organization").val();
            identifyTypeA = "99";
            birthday ="";
            sexA = "3";
            mobile = $("#phone").val();
            mail = $("#email").val();
            detailedAddress = $("#address").val();
            relatedperson ="";
            nameMechanism = $("#nameMechanism").val();
            isMechanism ="2";
            contactname = $("#contacts").val();
            typeMechanism = $("#nature").val();
            phoneMechanism = $("#phone1").val();
        }else{
            name = $("#name").val();
            identifyNumber = $("#numCard1").val();
            identifyTypeA = $("#idCard").prop( "checked" )?"01":"02";
            birthday = $("#birth").val();
            sexA = $("#man1").prop( "checked" )?"1":"2";
            mobile = $("#mobile").val();
            mail = $("#emailA").val();
            detailedAddress ="";
            if( $("#person1").prop( "checked" ) ){
                relatedperson = "01";
            }else if( $("#son").prop( "checked" ) ){
                relatedperson = "40";
            }else{
                relatedperson = "02";
            }
            nameMechanism ="";
            isMechanism ="1";
            contactname ="";
            typeMechanism ="";
            phoneMechanism ="";
        }


        var data = {
            "insuredList": {
                "name": $("#insureName").val(),
                "identifyType": identifyType,
                "identifyNumber": $("#numCard").val(),
                "birthday": $("#birth1").val(),
                "detailedAddress": $("#destination").val(),
                "sex": sex
            },
            "applicantList": {
                "phoneMechanism":phoneMechanism,
                "contactname":contactname,
                "nameMechanism": nameMechanism,
                "isMechanism": isMechanism,
                "identifyType":identifyTypeA,
                "identifyNumber": identifyNumber,
                "detailedAddress": detailedAddress,
                "name": name,
                "birthday": birthday,
                "mobile": mobile,
                "typeMechanism": typeMechanism,
                "mail": mail,
                "relatedperson": relatedperson,
                "sex":sexA
            }

        };

        console.log( data );
    });



});
