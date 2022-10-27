
#Create users for database
User.create(first_name:"Bella", last_name:"Bessa", username:"bella", password:"cool")
User.create(first_name:"Leona", last_name:"Q", username:"leona", password:"lol")
User.create(first_name:"Rafia", last_name:"KJ", username:"rafia", password:"1234")


#Create workouts type for database
WorkoutType.create(name:"Aerobics, general", cals_per_hour:457)
WorkoutType.create(name:"Basketball game, competitive", cals_per_hour:563)
WorkoutType.create(name:"Cycling, moderate", cals_per_hour:563)
WorkoutType.create(name:"Running, general", cals_per_hour:563)
WorkoutType.create(name:"Walking 3.5 mph, brisk pace", cals_per_hour:267)
WorkoutType.create(name:"Hiking, cross country", cals_per_hour:422)
WorkoutType.create(name:"Swimming laps, freestyle, fast", cals_per_hour:704)
WorkoutType.create(name:"Swimming laps, freestyle, slow", cals_per_hour:493)
WorkoutType.create(name:"Water polo", cals_per_hour:704)
WorkoutType.create(name:"Stretching, hatha yoga", cals_per_hour:281)
WorkoutType.create(name:"Ballet, twist, jazz, tap", cals_per_hour:317)
WorkoutType.create(name:"Elliptical trainer, moderate effort", cals_per_hour:365)
WorkoutType.create(name:"Boxing", cals_per_hour:844)
WorkoutType.create(name:"Calisthenics", cals_per_hour:563)
WorkoutType.create(name:"Canoeing, rowing, moderate", cals_per_hour:493)
WorkoutType.create(name:"Circuit training, minimal rest", cals_per_hour:563)
WorkoutType.create(name:"Cricket ", cals_per_hour:352)
WorkoutType.create(name:"Croquet", cals_per_hour:176)
WorkoutType.create(name:"Cross country skiing, moderate", cals_per_hour:563)
WorkoutType.create(name:"Curling", cals_per_hour:281)
WorkoutType.create(name:"Fishing, general", cals_per_hour:211)
WorkoutType.create(name:"Gymnastics", cals_per_hour:281)
WorkoutType.create(name:"Handball", cals_per_hour:708)
WorkoutType.create(name:"Horseback riding", cals_per_hour:281)
WorkoutType.create(name:"Ice skating, average speed", cals_per_hour:493)
WorkoutType.create(name:"Judo, karate, jujitsu, martial arts", cals_per_hour:704)
WorkoutType.create(name:"Jumping rope", cals_per_hour:704)
WorkoutType.create(name:"Lacrosse", cals_per_hour:563)


#Create Workouts for database

Workout.create(date:DateTime.parse("2022/04/19 8:00"), mood:"good", workout_type_id:2, user_id:1, duration:45 )
Workout.create(date:DateTime.parse("2021/12/23 8:00"), mood:"tired", workout_type_id:1, user_id:2, duration:62 )
Workout.create(date:DateTime.parse("2022/08/29 8:00"), mood:"energized", workout_type_id:5, user_id:1, duration:80 )
Workout.create(date:DateTime.parse("2022/07/18 8:00"), mood:"neutral", workout_type_id:10, user_id:3, duration:25)
Workout.create(date:DateTime.parse("2022/01/08 8:00"), mood:"neutral", workout_type_id:8, user_id:3, duration:30)


puts "Seeding worked!"