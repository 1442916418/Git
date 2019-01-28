// 习题一
function Circular(radius)
{
    this.radius = radius;

    this.acreage = function()
    {
        return Math.floor(Math.PI*radius*radius);
    }

    this.perimeter = function()
    {
        return Math.floor((2*Math.PI*radius));
    }
}

// 习题二
function UserInfo(id, pwd, email)
{
    this.id = id;
    this.pwd = pwd;
    this.email = email;

    this.show = function()
    {
        return document.write("用户id：" + this.id + "密码：" + this.pwd + "email地址：" + this.email);
    }
}

// 习题三
function Calculator(n1, n2)
{
    this.n1 = n1;
    this.n2 = n2;

    this.addition = function()
    {
        return n1+n2;
    }
    
    this.subtration = function()
    {
        return n1-n2;
    }
    
    this.multiplication = function()
    {
        return n1*n2;
    }

    this.division = function()
    {
        return n1/n2;
    }
}