<template>
<div class="container-fluid">    <div class="container-fluid resources-container">
        <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 form-col">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 col-lg-offset-3 col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2
                        col-xs-12">
                            <h1>
                                <svg class="svg-lg">
                                <use xlink:href="#icon-contact"></use>
                                </svg>
                                <span class="svg-text-lg">Contact Us</span>
                            </h1>
                            <p>Phone or fax customer service, or complete the contact form below and an Education
                                Resource Consultant will contact you promptly.
                            </p>
                            <div class="row">
                                <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                    <h4>
                                        <svg>
                                        <use xlink:href="#icon-phone"></use>
                                        </svg>
                                        <span class="svg-text">Australia</span>
                                    </h4>
                                    <p>Phone <a class="contact-link" href="#">+61 (0)3 8671 1400</a></p>
                                    <p>FreePhone <a class="contact-link" href="#">1800 005 210</a></p>
                                    <p>FreeFax <a class="contact-link" href="#">1800 110 521</a></p>
                                </div>
                                <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                    <h4>
                                        <svg>
                                        <use xlink:href="#icon-phone"></use>
                                        </svg>
                                        <span class="svg-text">New Zealand</span>
                                    </h4>
                                    <p>Phone <a class="contact-link" href="#">+61 (0)3 8671 1400</a></p>
                                    <p>FreePhone <a class="contact-link" href="#">0800 023 520</a></p>
                                    <p>FreeFax <a class="contact-link" href="#">0800 501 016</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br>
                    <br>
                </div>
            </div>
        </div>
    </div>
    <br>
    <br>
    <style>
        .form-group-contact {
            margin: 5px;
            padding: 0px !important;

        }
    </style>

    <div class="container">
        <div class="row">
            <div class="col-lg-6 col-lg-offset-3 col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2 col-xs-12">
                <div class="text-center">
                    <label>Contact Details</label>
                </div>
                <!-- Live setting -->
                <!-- ANZGO-3650 modified by jbernardez 20180306 -->
                <form class="form-horizontal" id="contactUsForm" action="https://webto.salesforce.com/servlet/servlet.WebToLead">
                    <input type="hidden" name="oid" value="00D2000000000hs">
                    <input type="hidden" name="retURL" value="http://tng-local.cambridge.edu.au/go/contact/confirmation/">
                    <p>* - Required field</p>
                    <div class="form-group form-group-contact row">
                        <div class="col-lg-12">
                            <select class="form-control go-input" name="salutation" no-required="">
                                <option>Title</option>
                                <option value="Mr.">Mr.</option>
                                <option value="Ms.">Ms.</option>
                                <option value="Mrs.">Mrs.</option>
                                <option value="Dr.">Dr.</option>
                                <option value="Prof.">Prof.</option>
                                <option value="Father">Father</option>
                                <option value="Brother">Brother</option>
                                <option value="Sister">Sister</option>
                                <option value="Mother">Mother</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-signup form-group row form-group-contact"><div class="col-lg-12 form-col"><input type="text" class="form-control go-input" name="first_name" id="uFirstName" placeholder="First Name *"> </div></div><div class="form-signup form-group row form-group-contact"><div class="col-lg-12 form-col"><input type="text" class="form-control go-input" name="last_name" id="uLastName" placeholder="Last Name *"> </div></div>
                    <div class="form-signup form-group row form-group-contact"><div class="col-lg-12 form-col"><input type="text" class="form-control go-input" name="title" id="uPositionTitle" placeholder="Position Title *"> </div></div><div class="form-signup form-group row form-group-contact"><div class="col-lg-12 form-col"><input type="text" class="form-control go-input" name="company" id="uSchoolAddress" placeholder="School *"> </div></div>
                    <!-- Hack to forego concrete5 default display of address. Better way to render default address
                    should be done here. -->
                    <div class="form-group form-group-contact row">
                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 form-col">
                            <textarea class="form-control go-input" placeholder="Address *" rows="2" name="street">                            </textarea>
                        </div>
                    </div>
                    <div class="form-group form-group-contact row">
                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 form-col">
                            <input type="text" class="form-control go-input" placeholder="City *" name="city">
                        </div>
                    </div>
                    <div class="form-group form-group-contact row">
                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 form-col">
                            <select class="form-control go-input contact-country-select" name="country" url="/go/contact/getStatesProvinces/">
                                <option value="">Country *</option>
                                                                <option value="AU">Australia</option>
                                                                <option value="NZ">New Zealand</option>
                                                                <option value="AF">Afghanistan</option>
                                                                <option value="AL">Albania</option>
                                                                <option value="DZ">Algeria</option>
                                                                <option value="AS">American Samoa</option>
                                                                <option value="AD">Andorra</option>
                                                                <option value="AO">Angola</option>
                                                                <option value="AI">Anguilla</option>
                                                                <option value="AQ">Antarctica</option>
                                                                <option value="AG">Antigua and Barbuda</option>
                                                                <option value="AR">Argentina</option>
                                                                <option value="AM">Armenia</option>
                                                                <option value="AW">Aruba</option>
                                                                <option value="AT">Austria</option>
                                                                <option value="AZ">Azerbaijan</option>
                                                                <option value="BS">Bahamas</option>
                                                                <option value="BH">Bahrain</option>
                                                                <option value="BD">Bangladesh</option>
                                                                <option value="BB">Barbados</option>
                                                                <option value="BY">Belarus</option>
                                                                <option value="BE">Belgium</option>
                                                                <option value="BZ">Belize</option>
                                                                <option value="BJ">Benin</option>
                                                                <option value="BM">Bermuda</option>
                                                                <option value="BT">Bhutan</option>
                                                                <option value="BO">Bolivia</option>
                                                                <option value="BA">Bosnia and Herzegovina</option>
                                                                <option value="BW">Botswana</option>
                                                                <option value="BV">Bouvet Island</option>
                                                                <option value="BR">Brazil</option>
                                                                <option value="BQ">British Antarctic Territory</option>
                                                                <option value="IO">British Indian Ocean Territory</option>
                                                                <option value="VG">British Virgin Islands</option>
                                                                <option value="BN">Brunei</option>
                                                                <option value="BG">Bulgaria</option>
                                                                <option value="BF">Burkina Faso</option>
                                                                <option value="BI">Burundi</option>
                                                                <option value="KH">Cambodia</option>
                                                                <option value="CM">Cameroon</option>
                                                                <option value="CA">Canada</option>
                                                                <option value="CV">Cape Verde</option>
                                                                <option value="KY">Cayman Islands</option>
                                                                <option value="CF">Central African Republic</option>
                                                                <option value="TD">Chad</option>
                                                                <option value="CL">Chile</option>
                                                                <option value="CN">China</option>
                                                                <option value="CX">Christmas Island</option>
                                                                <option value="CC">Cocos [Keeling] Islands</option>
                                                                <option value="CO">Colombia</option>
                                                                <option value="KM">Comoros</option>
                                                                <option value="CG">Congo - Brazzaville</option>
                                                                <option value="CD">Congo - Kinshasa</option>
                                                                <option value="CK">Cook Islands</option>
                                                                <option value="CR">Costa Rica</option>
                                                                <option value="HR">Croatia</option>
                                                                <option value="CU">Cuba</option>
                                                                <option value="CY">Cyprus</option>
                                                                <option value="CZ">Czech Republic</option>
                                                                <option value="CI">Côte d’Ivoire</option>
                                                                <option value="DK">Denmark</option>
                                                                <option value="DJ">Djibouti</option>
                                                                <option value="DM">Dominica</option>
                                                                <option value="DO">Dominican Republic</option>
                                                                <option value="NQ">Dronning Maud Land</option>
                                                                <option value="EC">Ecuador</option>
                                                                <option value="EG">Egypt</option>
                                                                <option value="SV">El Salvador</option>
                                                                <option value="GQ">Equatorial Guinea</option>
                                                                <option value="ER">Eritrea</option>
                                                                <option value="EE">Estonia</option>
                                                                <option value="ET">Ethiopia</option>
                                                                <option value="FK">Falkland Islands</option>
                                                                <option value="FO">Faroe Islands</option>
                                                                <option value="FJ">Fiji</option>
                                                                <option value="FI">Finland</option>
                                                                <option value="FR">France</option>
                                                                <option value="GF">French Guiana</option>
                                                                <option value="PF">French Polynesia</option>
                                                                <option value="TF">French Southern Territories</option>
                                                                <option value="FQ">French Southern and Antarctic Territories</option>
                                                                <option value="GA">Gabon</option>
                                                                <option value="GM">Gambia</option>
                                                                <option value="GE">Georgia</option>
                                                                <option value="DE">Germany</option>
                                                                <option value="GH">Ghana</option>
                                                                <option value="GI">Gibraltar</option>
                                                                <option value="GR">Greece</option>
                                                                <option value="GL">Greenland</option>
                                                                <option value="GD">Grenada</option>
                                                                <option value="GP">Guadeloupe</option>
                                                                <option value="GU">Guam</option>
                                                                <option value="GT">Guatemala</option>
                                                                <option value="GG">Guernsey</option>
                                                                <option value="GN">Guinea</option>
                                                                <option value="GW">Guinea-Bissau</option>
                                                                <option value="GY">Guyana</option>
                                                                <option value="HT">Haiti</option>
                                                                <option value="HM">Heard Island and McDonald Islands</option>
                                                                <option value="HN">Honduras</option>
                                                                <option value="HK">Hong Kong SAR China</option>
                                                                <option value="HU">Hungary</option>
                                                                <option value="IS">Iceland</option>
                                                                <option value="IN">India</option>
                                                                <option value="ID">Indonesia</option>
                                                                <option value="IR">Iran</option>
                                                                <option value="IQ">Iraq</option>
                                                                <option value="IE">Ireland</option>
                                                                <option value="IL">Israel</option>
                                                                <option value="IT">Italy</option>
                                                                <option value="JM">Jamaica</option>
                                                                <option value="JP">Japan</option>
                                                                <option value="JT">Johnston Island</option>
                                                                <option value="JO">Jordan</option>
                                                                <option value="KZ">Kazakhstan</option>
                                                                <option value="KE">Kenya</option>
                                                                <option value="KI">Kiribati</option>
                                                                <option value="KW">Kuwait</option>
                                                                <option value="KG">Kyrgyzstan</option>
                                                                <option value="LA">Laos</option>
                                                                <option value="LV">Latvia</option>
                                                                <option value="LB">Lebanon</option>
                                                                <option value="LS">Lesotho</option>
                                                                <option value="LR">Liberia</option>
                                                                <option value="LY">Libya</option>
                                                                <option value="LI">Liechtenstein</option>
                                                                <option value="LT">Lithuania</option>
                                                                <option value="LU">Luxembourg</option>
                                                                <option value="MO">Macau SAR China</option>
                                                                <option value="MK">Macedonia</option>
                                                                <option value="MG">Madagascar</option>
                                                                <option value="MW">Malawi</option>
                                                                <option value="MY">Malaysia</option>
                                                                <option value="MV">Maldives</option>
                                                                <option value="ML">Mali</option>
                                                                <option value="MT">Malta</option>
                                                                <option value="MH">Marshall Islands</option>
                                                                <option value="MQ">Martinique</option>
                                                                <option value="MR">Mauritania</option>
                                                                <option value="MU">Mauritius</option>
                                                                <option value="YT">Mayotte</option>
                                                                <option value="MX">Mexico</option>
                                                                <option value="FM">Micronesia</option>
                                                                <option value="MI">Midway Islands</option>
                                                                <option value="MD">Moldova</option>
                                                                <option value="MC">Monaco</option>
                                                                <option value="MN">Mongolia</option>
                                                                <option value="ME">Montenegro</option>
                                                                <option value="MS">Montserrat</option>
                                                                <option value="MA">Morocco</option>
                                                                <option value="MZ">Mozambique</option>
                                                                <option value="MM">Myanmar [Burma]</option>
                                                                <option value="NA">Namibia</option>
                                                                <option value="NR">Nauru</option>
                                                                <option value="NP">Nepal</option>
                                                                <option value="NL">Netherlands</option>
                                                                <option value="AN">Netherlands Antilles</option>
                                                                <option value="NC">New Caledonia</option>
                                                                <option value="NI">Nicaragua</option>
                                                                <option value="NE">Niger</option>
                                                                <option value="NG">Nigeria</option>
                                                                <option value="NU">Niue</option>
                                                                <option value="NF">Norfolk Island</option>
                                                                <option value="KP">North Korea</option>
                                                                <option value="MP">Northern Mariana Islands</option>
                                                                <option value="NO">Norway</option>
                                                                <option value="OM">Oman</option>
                                                                <option value="PK">Pakistan</option>
                                                                <option value="PW">Palau</option>
                                                                <option value="PS">Palestinian Territories</option>
                                                                <option value="PA">Panama</option>
                                                                <option value="PG">Papua New Guinea</option>
                                                                <option value="PY">Paraguay</option>
                                                                <option value="PE">Peru</option>
                                                                <option value="PH">Philippines</option>
                                                                <option value="PN">Pitcairn Islands</option>
                                                                <option value="PL">Poland</option>
                                                                <option value="PT">Portugal</option>
                                                                <option value="PR">Puerto Rico</option>
                                                                <option value="QA">Qatar</option>
                                                                <option value="RO">Romania</option>
                                                                <option value="RU">Russia</option>
                                                                <option value="RW">Rwanda</option>
                                                                <option value="RE">Réunion</option>
                                                                <option value="BL">Saint Barthélemy</option>
                                                                <option value="SH">Saint Helena</option>
                                                                <option value="KN">Saint Kitts and Nevis</option>
                                                                <option value="LC">Saint Lucia</option>
                                                                <option value="MF">Saint Martin</option>
                                                                <option value="PM">Saint Pierre and Miquelon</option>
                                                                <option value="VC">Saint Vincent and the Grenadines</option>
                                                                <option value="WS">Samoa</option>
                                                                <option value="SM">San Marino</option>
                                                                <option value="SA">Saudi Arabia</option>
                                                                <option value="SN">Senegal</option>
                                                                <option value="RS">Serbia</option>
                                                                <option value="SC">Seychelles</option>
                                                                <option value="SL">Sierra Leone</option>
                                                                <option value="SG">Singapore</option>
                                                                <option value="SK">Slovakia</option>
                                                                <option value="SI">Slovenia</option>
                                                                <option value="SB">Solomon Islands</option>
                                                                <option value="SO">Somalia</option>
                                                                <option value="ZA">South Africa</option>
                                                                <option value="GS">South Georgia and the South Sandwich Islands</option>
                                                                <option value="KR">South Korea</option>
                                                                <option value="ES">Spain</option>
                                                                <option value="LK">Sri Lanka</option>
                                                                <option value="SD">Sudan</option>
                                                                <option value="SR">Suriname</option>
                                                                <option value="SJ">Svalbard and Jan Mayen</option>
                                                                <option value="SZ">Swaziland</option>
                                                                <option value="SE">Sweden</option>
                                                                <option value="CH">Switzerland</option>
                                                                <option value="SY">Syria</option>
                                                                <option value="ST">São Tomé and Príncipe</option>
                                                                <option value="TW">Taiwan</option>
                                                                <option value="TJ">Tajikistan</option>
                                                                <option value="TZ">Tanzania</option>
                                                                <option value="TH">Thailand</option>
                                                                <option value="TL">Timor-Leste</option>
                                                                <option value="TG">Togo</option>
                                                                <option value="TK">Tokelau</option>
                                                                <option value="TO">Tonga</option>
                                                                <option value="TT">Trinidad and Tobago</option>
                                                                <option value="TN">Tunisia</option>
                                                                <option value="TR">Turkey</option>
                                                                <option value="TM">Turkmenistan</option>
                                                                <option value="TC">Turks and Caicos Islands</option>
                                                                <option value="TV">Tuvalu</option>
                                                                <option value="UM">U.S. Minor Outlying Islands</option>
                                                                <option value="VI">U.S. Virgin Islands</option>
                                                                <option value="UG">Uganda</option>
                                                                <option value="UA">Ukraine</option>
                                                                <option value="AE">United Arab Emirates</option>
                                                                <option value="GB">United Kingdom</option>
                                                                <option value="US">United States</option>
                                                                <option value="UY">Uruguay</option>
                                                                <option value="UZ">Uzbekistan</option>
                                                                <option value="VU">Vanuatu</option>
                                                                <option value="VA">Vatican City</option>
                                                                <option value="VE">Venezuela</option>
                                                                <option value="VN">Vietnam</option>
                                                                <option value="WK">Wake Island</option>
                                                                <option value="WF">Wallis and Futuna</option>
                                                                <option value="EH">Western Sahara</option>
                                                                <option value="YE">Yemen</option>
                                                                <option value="ZM">Zambia</option>
                                                                <option value="ZW">Zimbabwe</option>
                                                                <option value="AX">Åland Islands</option>
                                                            </select>
                            <input type="hidden" value="/go/signup/getStatesProvinces/">
                        </div>
                    </div>
                    <div class="form-group form-group-contact row">
                        <div class="col-lg-8 col-md-8 col-sm-8 col-xs-7 form-col" id="contact-state-selector">
                            <input type="text" class="form-control go-input" placeholder="State/Province *" name="state">
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-5 form-col">
                            <input type="text" class="form-control go-input" placeholder="Postcode *" name="zip">
                        </div>
                    </div>
                    <div class="form-group form-group-contact row">
                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 form-col">
                            <input type="text" class="form-control go-input" placeholder="Phone number *" name="phone">
                        </div>
                    </div>
                    <div class="form-signup form-group row form-group-contact">
                        <div class="col-lg-12 form-col">
                            <input type="email" placeholder="Email Address *" id="email" name="email" class="form-control go-input" no-check="">
                        </div>
                    </div>
                    <br>
                    <br>
                    <div class="text-center">
                        <label>Enquiry</label>
                    </div>
                    <div class="form-group form-group-contact row">
                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 form-col">
                            <select class="form-control go-input" name="00N20000000BALL">
                                <option>Subject area</option>
                                <optgroup label="-------------------------"></optgroup>
                                <option value="All">All titles</option>
                                <optgroup label="-------------------------"></optgroup>
                                <optgroup label="Arts">
                                    <option value="Arts: Drama">Drama</option>
                                    <option value="Arts: Media">Media</option>
                                    <option value="Arts: Music">Music</option>
                                    <option value="Arts: Visual Arts">Visual Arts</option>
                                    <option value="Arts: Other">Other</option>
                                </optgroup>
                                <optgroup label="Business / Commerce">
                                    <option value="Bus/Com: Accounting">Accounting</option>
                                    <option value="Bus/Com: Business">Business</option>
                                    <option value="Bus/Com: Commerce">Commerce</option>
                                    <option value="Bus/Com: Economics">Economics</option>
                                    <option value="Bus/Com: Legal">Legal</option>
                                </optgroup>
                                <optgroup label="ELT">
                                    <option value="ELT">All</option>
                                </optgroup>
                                <optgroup label="English">
                                    <option value="English">All</option>
                                </optgroup>
                                <optgroup label="Geography">
                                    <option value="Geography">All</option>
                                </optgroup>
                                <optgroup label="Health &amp; PE">
                                    <option value="Health &amp; PE: Junior">Junior</option>
                                    <option value="Health &amp; PE: Senior">Senior</option>
                                </optgroup>
                                <optgroup label="History">
                                    <option value="History: Junior">Junior</option>
                                    <option value="History Senior">Senior</option>
                                </optgroup>
                                <optgroup label="Hum/HSIE">
                                    <option value="Hum/HSIE: Humanites Jnr">Humanites Jnr</option>
                                    <option value="Hum/HSIE: International">International</option>
                                    <option value="Hum/HSIE: Philosophy">Philosophy</option>
                                    <option value="Hum/HSIE: Politics">Politics</option>
                                    <option value="Hum/HSIE: Religion">Religion</option>
                                    <option value="Special Needs">Special Needs</option>
                                </optgroup>
                                <optgroup label="ICT">
                                    <option value="ICT: Junior">Junior</option>
                                    <option value="ICT: Senior">Senior</option>
                                </optgroup>
                                <optgroup label="Languages">
                                    <option value="Languages: French">French</option>
                                    <option value="Languages: German">German</option>
                                    <option value="Languages: Italian">Italian</option>
                                    <option value="Languages: Latin">Latin</option>
                                    <option value="Languages: Other">Other</option>
                                </optgroup>
                                <optgroup label="Mathematics">
                                    <option value="Maths: Junior">Junior</option>
                                    <option value="Maths: Senior">Senior</option>
                                </optgroup>
                                <optgroup label="Science">
                                    <option value="Science: Biology">Biology</option>
                                    <option value="Science: Chemistry">Chemistry</option>
                                    <option value="Science: Environmental">Environmental</option>
                                    <option value="Science: General">General</option>
                                    <option value="Science: Physics">Physics</option>
                                    <option value="Science: Psychology">Psychology</option>
                                    <option value="Science Junior">Science Junior</option>
                                </optgroup>
                                <optgroup label="Technology">
                                    <option value="Technology: Design">Design</option>
                                    <option value="Technology: Food">Food</option>
                                    <option value="Technology: Other">Other</option>
                                </optgroup>
                                <optgroup label="VET">
                                    <option value="VET: Careers">Careers</option>
                                    <option value="VET: Hospitality">Hospitality</option>
                                    <option value="VET: VCAL">VCAL</option>
                                </optgroup>
                                <optgroup label="-------------------------"></optgroup>
                                <option value="Other">Other titles</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group form-group-contact row">
                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 form-col">
                            <textarea class="form-control go-input" placeholder="Your query *" rows="2" name="description">                            </textarea>
                        </div>
                    </div>
                    <div class="form-group form-group-contact row">
                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 form-col">
                            <select class="form-control go-input" name="00N20000000BALM">
                                <option>Year Level</option>
                                <option value="Lower Primary">Lower Primary</option>
                                <option value="Middle Primary">Middle Primary</option>
                                <option value="Upper Primary">Upper Primary</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                                <option value="International Baccalaureate">International Baccalaureate</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-sm-12">
                            <p class="form-control-static" style="font-size: 12px;">
                                Cambridge University Press and its affiliate, Cambridge HOTmaths, may occasionally send
                                you additional product information. Cambridge University Press and Cambridge HOTmaths
                                respect your privacy and will not pass your details on to any third party, in
                                accordance with our privacy policy. This policy also contains information about how to
                                access and seek correction to your personal data, or to complain about a breach of
                                Australian Privacy Principles.
                            </p>
                        </div>
                    </div>
                    <div class="form-group row" style="margin-bottom: 10px;">
                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 form-col">
                            <input type="checkbox" name="emailOptOut">
                            I would like to receive product information by email
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 form-col">
                            <!-- ANZGO-3811 added by jbernardez 20180801 -->
                            <input type="checkbox" name="">
                            <!-- ANZGO-3827 modified by jbernardez 20180813 -->
                            <input type="hidden" name="HardCopyOptOut__c" value="0">
                            I would like to receive product information by regular post
                        </div>
                    </div>
                     <!-- ANZGO-3812 added by jdchavez 08/01/2018 recaptcha-->
                    <div class="fade in field-remove">
                        <div id="captcha" align="center"><div style="width: 304px; height: 78px;"><div><iframe src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6Lc7ti0UAAAAAEsVUT0q6um2a2WCjuhdb4CxpjoX&amp;co=aHR0cDovL3RuZy1sb2NhbC5jYW1icmlkZ2UuZWR1LmF1Ojgw&amp;hl=en&amp;v=v1535045166622&amp;theme=light&amp;size=normal&amp;cb=641g26h6teuw" width="304" height="78" role="presentation" name="a-ostc1o14j3wq" frameborder="0" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox"></iframe></div><textarea id="g-recaptcha-response-3" name="g-recaptcha-response" class="g-recaptcha-response" style="width: 250px; height: 40px; border: 1px solid #c1c1c1; margin: 10px 25px; padding: 0px; resize: none;  display: none; "></textarea></div></div>
                            <div class="reCaptcha" align="center">
                                <div class="g-recaptcha" data-sitekey="6Lc7ti0UAAAAAEsVUT0q6um2a2WCjuhdb4CxpjoX" data-callback="recaptchaCallback2">
                                </div>
                            </div>
                    </div>
                    <div class="form-group form-group-contact row">
                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 form-col">
                            <!-- ANZGO-3812 modified by jdchavez 08/01/2018 -->
                            <a class="contact-link btn btn-success btn-block btn-lg go-btn contactCaptcha" id="submit-contact" onclick="return btnClick();"> Submit </a>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>

</template>

<script>
    export default {
        name: 'Activation'
    }

</script>