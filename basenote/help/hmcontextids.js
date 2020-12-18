var hmContextIds = new Array();
function hmGetContextId(query) {
    var urlParams;
    var match,
        pl = /\+/g,
        search = /([^&=]+)=?([^&]*)/g,
        decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); },
    params = {};
    while (match = search.exec(query))
       params[decode(match[1])] = decode(match[2]);
    if (params["contextid"]) return decodeURIComponent(hmContextIds[params["contextid"]]);
    else return "";
}

hmContextIds["50"]="50.htm";
hmContextIds["100"]="100.htm";
hmContextIds["60"]="60.htm";
hmContextIds["150"]="150.htm";
hmContextIds["200"]="200.htm";
hmContextIds["250"]="250.htm";
hmContextIds["300"]="300.htm";
hmContextIds["350"]="350.htm";
hmContextIds["400"]="400.htm";
hmContextIds["450"]="450.htm";
hmContextIds["500"]="500.htm";
hmContextIds["550"]="550.htm";
hmContextIds["600"]="600.htm";
hmContextIds["650"]="650.htm";
hmContextIds["700"]="700.htm";
hmContextIds["750"]="750.htm";
hmContextIds["800"]="800.htm";
hmContextIds["801"]="801.htm";
hmContextIds["551"]="551.htm";
hmContextIds["850"]="850.htm";
hmContextIds["900"]="900.htm";
hmContextIds["950"]="950.htm";
hmContextIds["1000"]="1000.htm";
hmContextIds["1050"]="1050.htm";
hmContextIds["1100"]="1100.htm";
hmContextIds["1800"]="1800.htm";
hmContextIds["1150"]="1150.htm";
hmContextIds["1200"]="1200.htm";
hmContextIds["1250"]="1250.htm";
hmContextIds["1300"]="1300.htm";
hmContextIds["1350"]="1350.htm";
hmContextIds["1750"]="1750.htm";
hmContextIds["1400"]="1400.htm";
hmContextIds["1450"]="1450.htm";
hmContextIds["1600"]="1600.htm";
hmContextIds["1850"]="1850.htm";
hmContextIds["1500"]="1500.htm";
hmContextIds["1550"]="1550.htm";
hmContextIds["1650"]="1650.htm";
hmContextIds["2450"]="2450.htm";
hmContextIds["1700"]="1700.htm";
hmContextIds["2250"]="2250.htm";
hmContextIds["2150"]="2150.htm";
hmContextIds["2200"]="2200.htm";
hmContextIds["2500"]="2500.htm";
hmContextIds["2600"]="2600.htm";
