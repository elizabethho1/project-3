create table "countries" (
	"country" text,
	"meal_inexpensive" int,
	"monthly_transport_ticket" int,
	"one_liter_gasoline" int,
	"utilities_915sqft" int,
	"internet" int,
	"monthly_gym_fee" int,
	"monthly_preschool_one_child" int,
	"center_city_1_bd" int,
	"avg_monthly_salary" int,
	"lat" varchar(255),
	"lng" varchar(255),
	"capital" text,
	"2021 inflation rate" int
);
create table "cities" (
	"city" text,
	"country" text,
	"meal_inexpensive" int,
	"monthly_transport_ticket" int,
	"one_liter_gasoline" int,
	"utilities_915sqft" int,
	"internet" int,
	"monthly_gym_fee" int,
	"monthly_preschool_one_child" int,
	"center_city_1_bd" int,
	"avg_monthly_salary" int,
	"City, Country" text,
	"lat" int,
	"lng" int,
	"population" int
);