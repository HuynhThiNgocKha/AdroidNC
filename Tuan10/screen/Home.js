import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Pressable,
  Image,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";
import { AntDesign, FontAwesome5, FontAwesome } from "@expo/vector-icons";

export default function Home() {
  const [listDataPopularCourses, setListDataPopularCourses] = useState([]);
  const [listDataRecomments, setListDataRecomments] = useState([]);
  const [listDataTopTeacher, setListDataTopTeacher] = useState([]);
  const [listDataCourseInspires, setListDataCourseInspires] = useState([]);

  useEffect(() => {
    fetch("https://650425cec8869921ae249549.mockapi.io/popularCourses")
      .then((response) => response.json())
      .then((data) => {
        setListDataPopularCourses(data);
        console.log(data);
      })
      .catch((error) =>
        console.error("Error fetching popular courses:", error)
      );
  }, []);

  useEffect(() => {
    fetch("https://650425cec8869921ae249549.mockapi.io/recommend")
      .then((response) => response.json())
      .then((data) => {
        setListDataRecomments(data);
        console.log(data);
      })
      .catch((error) =>
        console.error("Error fetching popular courses:", error)
      );
  }, []);

  useEffect(() => {
    fetch("https://6505c36aef808d3c66f06e72.mockapi.io/topteacher")
      .then((response) => response.json())
      .then((data) => {
        setListDataTopTeacher(data);
        console.log(data);
      })
      .catch((error) =>
        console.error("Error fetching popular courses:", error)
      );
  }, []);
  useEffect(() => {
    fetch("https://660ade10ccda4cbc75dbf6cf.mockapi.io/CourseInspires")
      .then((response) => response.json())
      .then((data) => {
        setListDataCourseInspires(data);
        console.log(data);
      })
      .catch((error) =>
        console.error("Error fetching popular courses:", error)
      );
  }, []);

  return (
    <View style={{flex:1}}>
      <StatusBar barStyle="light-content" />
      <SafeAreaView
        style={{ backgroundColor: "#56f", height: 120, flexDirection: "row" }}
      >
        <View style={{ marginLeft: 30, marginTop: 10 }}>
          <Text style={{ fontSize: 22, color: "white", fontWeight: 800 }}>
            Hello , Rosie!
          </Text>
          <Text style={{ fontSize: 16, color: "white", fontWeight: 500 }}>
            What do you want to learn today?
          </Text>
        </View>

        <View
          style={{
            marginLeft: "auto",
            marginRight: 20,
            flexDirection: "row",
            marginTop: 5,
          }}
        >
          <AntDesign
            name="shoppingcart"
            size={26}
            color="white"
            style={{ marginRight: 10 }}
          />
          <FontAwesome5 name="bell" size={26} color="white" />
        </View>
      </SafeAreaView>

      <View style={{ alignItems: "center" }}>
        <ScrollView
          style={{ width: "90%" }}
          showsVerticalScrollIndicator={false}
        >
          {/* image  */}
          <View style={{ marginBottom: 5 }}>
            <Image
              source={require("../image/image1.png")}
              style={{ width: "100%", height: 200 }}
              resizeMode="contain"
            />
          </View>
          {/* View Category */}
          <View style={{}}>
            {/* content category */}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 10,
              }}
            >
              <Text style={{ fontSize: 18, color: "black", fontWeight: 700 }}>
                Categories
              </Text>
              <Pressable>
                <Text style={{ fontSize: 18, color: "gray", fontWeight: 500 }}>
                  View more
                </Text>
              </Pressable>
            </View>
            {/* button category */}
            <View
              style={{
                flexDirection: "row",
                width: "100%",
                justifyContent: "space-between",
              }}
            >
              <View style={{ width: "48%" }}>
                <Pressable
                  style={{
                    borderWidth: 0.2,
                    borderColor: "gray",
                    borderRadius: 10,
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      padding: 5,
                    }}
                  >
                    <Image
                      source={require("../image/Button17.png")}
                      style={{ width: 50, height: 50 }}
                    />
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: 500,
                        marginLeft: 10,
                      }}
                    >
                      Business
                    </Text>
                  </View>
                </Pressable>
                <Pressable
                  style={{
                    borderWidth: 0.2,
                    borderColor: "gray",
                    marginTop: 10,
                    borderRadius: 10,
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      padding: 5,
                    }}
                  >
                    <Image
                      source={require("../image/Button18.png")}
                      style={{ width: 50, height: 50 }}
                    />
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: 500,
                        marginLeft: 10,
                      }}
                    >
                      Code
                    </Text>
                  </View>
                </Pressable>
                <Pressable
                  style={{
                    borderWidth: 0.2,
                    borderColor: "gray",
                    marginTop: 10,
                    borderRadius: 10,
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      padding: 5,
                    }}
                  >
                    <Image
                      source={require("../image/Button19.png")}
                      style={{ width: 50, height: 50 }}
                    />
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: 500,
                        marginLeft: 10,
                      }}
                    >
                      Movie
                    </Text>
                  </View>
                </Pressable>
              </View>

              <View style={{ width: "48%" }}>
                <Pressable
                  style={{
                    borderWidth: 0.2,
                    borderColor: "gray",
                    borderRadius: 10,
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      padding: 5,
                    }}
                  >
                    <Image
                      source={require("../image/Button20.png")}
                      style={{ width: 50, height: 50 }}
                    />
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: 500,
                        marginLeft: 10,
                      }}
                    >
                      Design
                    </Text>
                  </View>
                </Pressable>

                <Pressable
                  style={{
                    borderWidth: 0.2,
                    borderColor: "gray",
                    marginTop: 10,
                    borderRadius: 10,
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      padding: 5,
                    }}
                  >
                    <Image
                      source={require("../image/Button21.png")}
                      style={{ width: 50, height: 50 }}
                    />
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: 500,
                        marginLeft: 10,
                      }}
                    >
                      Writing
                    </Text>
                  </View>
                </Pressable>
                <Pressable
                  style={{
                    borderWidth: 0.2,
                    borderColor: "gray",
                    marginTop: 10,
                    borderRadius: 10,
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      padding: 5,
                    }}
                  >
                    <Image
                      source={require("../image/Button22.png")}
                      style={{ width: 50, height: 50 }}
                    />
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: 500,
                        marginLeft: 10,
                      }}
                    >
                      Language
                    </Text>
                  </View>
                </Pressable>
              </View>
            </View>
          </View>

          {/* View popular */}
          <View style={{ marginTop: 30 }}>
            {/* content popular */}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 10,
              }}
            >
              <Text style={{ fontSize: 18, color: "black", fontWeight: 700 }}>
                Popular Courses
              </Text>
              <Pressable>
                <Text style={{ fontSize: 18, color: "gray", fontWeight: 500 }}>
                  View more
                </Text>
              </Pressable>
            </View>
            {/* items popular */}
            <View style={{ height: 270 }}>
              <FlatList
                data={listDataPopularCourses}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                  <View style={{ height: 250 }}>
                    <Pressable
                      style={{
                        padding: 5,
                        borderWidth: 0.2,
                        borderRadius: 10,
                        borderColor: "gray",
                        marginLeft: 8,
                      }}
                    >
                      <Image
                        source={item.image}
                        style={{ width: 200, height: 150 }}
                      />
                      <View
                        style={{
                          flexDirection: "row",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <Text style={{ fontSize: 16, fontWeight: 700 }}>
                          {item.title}
                        </Text>
                        <FontAwesome
                          name="bookmark-o"
                          size={24}
                          color="black"
                        />
                      </View>
                      <Text style={{ fontWeight: 600, color: "gray" }}>
                        {item.author}
                      </Text>
                      <Text
                        style={{
                          fontWeight: 600,
                          color: "rgb(83,92,233)",
                          fontSize: 16,
                        }}
                      >
                        ${item.price}
                      </Text>
                      <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                      >
                        <FontAwesome name="star" size={24} color="#fd3" />
                        <Text style={{ fontWeight: 600 }}>
                          {item.rating} ({item.ratingCount}) - {item.lessons}{" "}
                          lessons
                        </Text>
                      </View>
                    </Pressable>
                  </View>
                )}
                keyExtractor={(item) => item.id}
                horizontal={true}
              />
            </View>
          </View>

          {/* View recomment for you */}
          <View style={{ marginTop: 15 }}>
            {/* content recomment */}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 10,
              }}
            >
              <Text style={{ fontSize: 18, color: "black", fontWeight: 700 }}>
                Recommended for you
              </Text>
              <Pressable>
                <Text style={{ fontSize: 18, color: "gray", fontWeight: 500 }}>
                  View more
                </Text>
              </Pressable>
            </View>
            {/* items Recommended */}
            <View style={{ height: 300 }}>
              <FlatList
                data={listDataRecomments}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                  <View style={{ height: 250 }}>
                    <Pressable
                      style={{
                        padding: 5,
                        borderWidth: 0.2,
                        borderRadius: 10,
                        borderColor: "gray",
                        marginLeft: 8,
                      }}
                    >
                      <Image
                        source={item.image}
                        style={{ width: 200, height: 150 }}
                      />
                      <View
                        style={{
                          flexDirection: "row",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <Text style={{ fontSize: 16, fontWeight: 700 }}>
                          {item.title}
                        </Text>
                        <FontAwesome
                          name="bookmark-o"
                          size={24}
                          color="black"
                        />
                      </View>
                      <Text style={{ fontWeight: 600, color: "gray" }}>
                        {item.author}
                      </Text>
                      <Text
                        style={{
                          fontWeight: 600,
                          color: "rgb(83,92,233)",
                          fontSize: 16,
                        }}
                      >
                        ${item.price}
                      </Text>
                      <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                      >
                        <FontAwesome name="star" size={24} color="#fd3" />
                        <Text style={{ fontWeight: 600 }}>
                          {item.rating} ({item.ratingCount}) - {item.lessons}{" "}
                          lessons
                        </Text>
                      </View>
                    </Pressable>
                  </View>
                )}
                keyExtractor={(item) => item.id}
                horizontal={true}
              />
            </View>
          </View>

          {/* View Course that inspires */}
          <View style={{ marginTop: 15 }}>
            {/* content Course that inspires */}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 20,
              }}
            >
              <Text style={{ fontSize: 18, color: "black", fontWeight: 700 }}>
                Course that inspires
              </Text>
              <Pressable>
                <Text style={{ fontSize: 18, color: "gray", fontWeight: 500 }}>
                  View more
                </Text>
              </Pressable>
            </View>

            {/* items Course that inspires */}
            <View>
              {listDataCourseInspires.map((item) => {
                return (
                  <View style={{ marginBottom: 20 }} key={item.id}>
                    <Pressable
                      style={{
                        padding: 5,
                        borderWidth: 0.2,
                        borderRadius: 10,
                        borderColor: "gray",
                        marginLeft: 8,
                        flexDirection: "row",
                        alignItems: "center",

                        height: 150,
                      }}
                    >
                      <Image
                        source={item.image}
                        style={{ width: "40%", height: 100 }}
                      />

                      <View
                        style={{
                          flexDirection: "column",
                          marginLeft: 10,
                          width: "58%",
                        }}
                      >
                        <View
                          style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <Text style={{ fontSize: 16, fontWeight: 700 }}>
                            {item.title}
                          </Text>
                          <FontAwesome
                            name="bookmark-o"
                            size={24}
                            color="black"
                          />
                        </View>
                        <Text style={{ fontWeight: 600, color: "gray" }}>
                          {item.author}
                        </Text>
                        <Text
                          style={{
                            fontWeight: 600,
                            color: "rgb(83,92,233)",
                            fontSize: 16,
                          }}
                        >
                          ${item.price}
                        </Text>
                        <View
                          style={{ flexDirection: "row", alignItems: "center" }}
                        >
                          <FontAwesome name="star" size={24} color="#fd3" />
                          <Text style={{ fontWeight: 600 }}>
                            {item.rating} ({item.ratingCount}) - {item.lessons}{" "}
                            lessons
                          </Text>
                        </View>
                      </View>
                    </Pressable>
                  </View>
                );
              })}
            </View>
          </View>

          {/* View top teacher */}
          <View style={{ marginTop: 30 }}>
            {/* content top teacher */}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 10,
              }}
            >
              <Text style={{ fontSize: 18, color: "black", fontWeight: 700 }}>
                Top teacher
              </Text>
              <Pressable>
                <Text style={{ fontSize: 18, color: "gray", fontWeight: 500 }}>
                  View more
                </Text>
              </Pressable>
            </View>
            {/* items popular */}
            <View style={{ height: 270 }}>
              <FlatList
                data={listDataTopTeacher}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                  <View style={{ height: 250 }}>
                    <Pressable
                      style={{
                        padding: 5,
                        borderWidth: 0.2,
                        borderRadius: 10,
                        borderColor: "gray",
                        marginLeft: 8,
                      }}
                    >
                      <Image
                        source={item.image}
                        style={{ width: 200, height: 150 }}
                      />
                      <View
                        style={{
                          flexDirection: "row",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <Text style={{ fontSize: 16, fontWeight: 700 }}>
                          {item.teacher}
                        </Text>
                        <FontAwesome
                          name="bookmark-o"
                          size={24}
                          color="black"
                        />
                      </View>
                      <Text style={{ fontWeight: 600, color: "gray" }}>
                        {item.school}
                      </Text>

                      <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                      >
                        <FontAwesome name="star" size={24} color="#fd3" />
                        <Text style={{ fontWeight: 600 }}>
                          {item.rating} ({item.ratingCount}) - {item.lessons}{" "}
                          lessons
                        </Text>
                      </View>
                    </Pressable>
                  </View>
                )}
                keyExtractor={(item) => item.id}
                horizontal={true}
              />
            </View>
          </View>

          <View style={{ height: 150 }} />
        </ScrollView>
      </View>
    </View>
  );
}
