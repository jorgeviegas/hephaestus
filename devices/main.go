package main

import (
	"net/http"

	"github.com/labstack/echo/v4"
)

var Devices []Device

type Device struct {
	Id string `json:"id"`
}

func main() {

	// Initialize test data
	initData()

	// Echo instance
	e := echo.New()

	// Routes
	e.GET("/", hello)
	e.GET("/devices", getAllDevices)

	// Start server
	e.Logger.Fatal(e.Start(":1323"))
}

// Handler
func hello(c echo.Context) error {
	return c.String(http.StatusOK, "Hello, World!")
}

func initData() {
	Devices = []Device{
		Device{Id: "1"},
		Device{Id: "8"},
		Device{Id: "9"},
	}
}

func getAllDevices(context echo.Context) error {
	return context.JSON(http.StatusOK, Devices)
}
