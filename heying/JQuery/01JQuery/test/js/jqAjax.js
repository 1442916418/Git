$('#province').ready(function () {
    $.get("../data/city.json", '',
        function (data, textStatus, jqXHR) {
            $.each(data, function (index, value) {
                $('#province').append($('<option></option>').html(value.name));
            });
        },
        "json"
    );
});

$('#province').change(function () {
    var currentValue = this.value;
    $('#city > option:nth-child(n+2)').detach();
    $('#county > option:nth-child(n+2)').detach();

    $.get("../data/city.json", '',
        function (data, textStatus, jqXHR) {
            $.each(data, function (index, value) {
                if (value.name == currentValue) {
                    $.each(value.city, function (cityIndex, cityValue) {
                        $('#city').append($('<option></option>').html(cityValue.name));
                    });
                }
            });
        },
        "json"
    );
});

$('#city').change(function () {
    var currentValue = this.value;
    $('#county > option:nth-child(n+2)').detach();

    $.get("../data/city.json", '', function (data, textStatus, jqXHR) {
        $.each(data, function (index, value) {
            $.each(value.city, function (cityIndex, cityValue) {
                if (cityValue.name == currentValue) {
                    $.each(cityValue.area, function (countyIndex, countyValue) {
                        $('#county').append($('<option></option>').html(countyValue));
                    });
                }
            });
        });
    },
        "json"
    );
});